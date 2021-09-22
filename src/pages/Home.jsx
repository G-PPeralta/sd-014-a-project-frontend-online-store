import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { createStoraged } from '../services/localStorage';
import ListCategories from '../components/ListCategories';
import ProductCard from '../components/ProductCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productFiltred: [],
      searchValue: '',
      idCategory: '',
    };

    this.filterByCategory = this.filterByCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    createStoraged();
  }

  async handleClick() {
    const { searchValue, idCategory } = this.state;
    const fetchProduct = await getProductsFromCategoryAndQuery(idCategory, searchValue);
    this.setState({
      productFiltred: fetchProduct.results,
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  async filterByCategory(categoryId, query) {
    const productFiltred = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      productFiltred: productFiltred.results,
      idCategory: categoryId,
    });
  }

  render() {
    const { state: { categories, productFiltred, searchValue } } = this;
    return (
      <main>
        <header>
          <h3
            data-testid="home-initial-message"
            className="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <div>
            <input
              name="searchValue"
              value={ searchValue }
              onChange={ this.handleChange }
              data-testid="query-input"
              type="text"
              className="home-input"
            />
            <button
              onClick={ this.handleClick }
              data-testid="query-button"
              type="button"
              className="home-button-header"
            >
              Pesquisar
            </button>
            <Link
              to="/cart"
              data-testid="shopping-cart-button"
              className="cart-link"
            >
              Carrinho
            </Link>
          </div>
        </header>
        <ListCategories
          filterByCategory={ this.filterByCategory }
          categories={ categories }
        />
        <section className="product_section">
          { productFiltred.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          )) }
        </section>
      </main>
    );
  }
}

export default Home;
