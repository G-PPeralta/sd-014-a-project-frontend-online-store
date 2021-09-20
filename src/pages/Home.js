import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';
import Categories from '../components/Categories';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

import '../styles/Home.css';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      category: null,
      searchText: '',
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  handleInput = ({ target: { name, value } }) => { this.setState({ [name]: value }); }

  handleRadio = ({ target: { checked, id } }) => {
    if (checked) {
      this.setState({ category: id });
    }
  }

  handleClick = () => {
    this.setState({ isLoading: true });
    this.getProducts();
  }

  getProducts = async () => {
    const { category, searchText } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(category, searchText);
    const results = products ? products.results : [];
    this.setState({ isLoading: false, products: results });
  }

  results = () => {
    const { products } = this.state;
    if (!products.length) {
      return (
        <h4>Digite algum termo de pesquisa ou escolha uma categoria.</h4>
      );
    }
    return (
      products.map((product, idx) => (<ProductCard key={ idx } product={ product } />))
    );
  }

  render() {
    const { isLoading, category, searchText } = this.state;

    return (
      <main data-testid="home-initial-message" className="flex">
        <Categories category={ category } onChange={ this.handleRadio } />
        <section className="lado-direito">
          <article className="query-form">
            <input
              className="search"
              type="text"
              data-testid="query-input"
              id="query-input"
              name="searchText"
              value={ searchText }
              onChange={ this.handleInput }
              placeholder="Termo de pesquisa"
            />
            <button
              type="submit"
              data-testid="query-button"
              id="query-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
            <Link to="/cart" data-testid="shopping-cart-button">
              <span id="shopping-cart" role="img" aria-label="shopping-cart">
                &#128722;
              </span>
            </Link>
          </article>
          <article className="query-results">
            { isLoading ? <Loading /> : this.results() }
          </article>
        </section>
      </main>
    );
  }
}
