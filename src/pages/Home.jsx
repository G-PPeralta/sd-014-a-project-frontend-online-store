import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';
import '../styles/Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      // category: '',
      didSearch: false,
      products: [],
      query: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSearch = ({ target: { value } }) => {
    const { query } = this.state;
    api
      .getProductsFromCategoryAndQuery(value, query)
      .then(({ results: products }) => {
        this.setState({ didSearch: true, products });
      });
  };

  renderSearchSection = () => {
    const { query } = this.state;
    return (
      <section className="search-section">
        <div>
          <button
            className="query-button"
            data-testid="query-button"
            onClick={ this.handleSearch }
            type="button"
          >
            <img
              alt="search"
              src="https://img.icons8.com/ios/50/000000/search--v1.png"
            />
          </button>
          <input
            className="query-input"
            data-testid="query-input"
            name="query"
            onChange={ this.handleChange }
            type="text"
            value={ query }
          />
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <img
              alt="shopping-cart"
              src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
            />
          </Link>
        </div>
      </section>
    );
  };

  render() {
    const { categories, didSearch, products } = this.state;
    return (
      <div className="home-page">
        <section className="category-list">
          <h4>Categorias:</h4>
          {categories.map(({ id, name }) => (
            <label
              className="category-item"
              data-testid="category"
              htmlFor={ id }
              key={ id }
            >
              <input
                id={ id }
                name="category"
                onChange={ this.handleSearch }
                type="radio"
                value={ id }
              />
              {name}
            </label>
          ))}
        </section>
        <main className="main-content">
          {this.renderSearchSection()}
          <section className="product-list">
            {!didSearch && (
              <p className="message" data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}
            {didSearch
              && products.length > 0
              && products.map((product) => (
                <ProductCard key={ product.id } product={ product } />
              ))}
            {didSearch && products.length === 0 && (
              <p className="message">Nenhum produto encontrado</p>
            )}
          </section>
        </main>
      </div>
    );
  }
}
