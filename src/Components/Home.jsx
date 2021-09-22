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
    this.setState({ productList: result });
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
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );
    return (
      <div>
        <input
          type="text"
          onChange={ this.searchProduct }
          value={ searchInput }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.handleButton }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <p data-testid="shopping-cart-size">{ totalItems }</p>
        <nav>
          <CategoriesList
            list={ categoriesList }
            callback={ this.handleSelectedCategory }
          />
        </nav>
        <section>
          {productList.length !== 0 ? this.productMap() : initialMessage}
        </section>
      </div>
    );
  }
}
