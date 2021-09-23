import React from 'react';

import {
  Link,
} from 'react-router-dom';
import {
  getProductsFromCategoryAndQuery,
  getCategories,
} from '../services/api';

import CategoriesList from './CategoriesList';
import ProductCard from './ProductCard';

import '../style/Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      categoriesList: [],
      searchInput: '',
      selectedCategory: '',
      totalItems: 0,
    };
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
    this.productMap = this.productMap.bind(this);
  }

  componentDidMount() { // pega categorias p/ lista de categorias
    this.fetchCategories();
    this.totalItemsInCart();
  }

  async handleSelectedCategory({ target }) {
    const category = target.value;
    const { searchInput } = this.state;
    const list = await getProductsFromCategoryAndQuery(category, searchInput);
    const result = list.results;
    this.setState({ productList: [] }, () => {
      this.setState({ productList: result });
    });
  }

   fetchCategories = async () => {
     const categories = await getCategories();
     this.setState({ categoriesList: categories });
   }

  searchProduct = ({ target }) => {
    const { value } = target;
    this.setState({ searchInput: value });
  }

  handleButton = async () => {
    const { searchInput, selectedCategory } = this.state;
    const list = await getProductsFromCategoryAndQuery(selectedCategory, searchInput);
    const result = list.results;
    this.setState({
      productList: result,
    });
  }

  totalItemsInCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) {
      const totalItems = currentCart.reduce((acc, item) => {
        acc += item.quantity;
        return acc;
      }, 0);
      this.setState({ totalItems });
    }
  }

  productMap() {
    const { productList, totalItems, disabled } = this.state;
    return productList.map((prod, i) => (<ProductCard
      totalItemsInCart={ this.totalItemsInCart }
      totalItems={ totalItems }
      product={ prod }
      key={ i }
      disabled={ disabled }
    />));
  }

  render() {
    const {
      searchInput,
      categoriesList,
      productList,
      totalItems,
    } = this.state;
    const initialMessage = (
      <h3
        className="text-md-end"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );
    return (
      <div>
        <header
          className="d-flex flex-row
          justify-content-between
          input-group-sm mb-3 div-header"
        >
          <div className="d-flex flex-row justify-content-center div-input">
            <input
              className="input-group-text opacity-75"
              placeholder="pesquise algo aqui!"
              type="text"
              onChange={ this.searchProduct }
              value={ searchInput }
              data-testid="query-input"
            />
            <button
              className="btn btn-dark"
              type="button"
              onClick={ this.handleButton }
              data-testid="query-button"
            >
              Pesquisar
            </button>
          </div>
          <div className="d-flex flex-row align-items-end">
            <Link to="/cart" data-testid="shopping-cart-button">
              <i className="fas fa-shopping-cart fa-2x" />
            </Link>
            <p data-testid="shopping-cart-size">{ totalItems }</p>
          </div>
        </header>
        <main className="d-flex">
          <nav className="overflow-auto div-category">
            <CategoriesList
              list={ categoriesList }
              callback={ this.handleSelectedCategory }
            />
          </nav>
          <section className="d-flex flex-wrap overflow-auto section-height">
            {productList.length !== 0 ? this.productMap() : initialMessage}
          </section>
        </main>
      </div>
    );
  }
}
