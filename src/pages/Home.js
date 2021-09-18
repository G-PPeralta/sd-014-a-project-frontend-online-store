import React from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

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
    const { isLoading } = this.state;
    if (isLoading) {
      this.getProducts();
    }
  }

  handleInput = ({ target: { name, value } }) => { this.setState({ [name]: value }); }

  handleRadio = ({ target: { checked, value } }) => {
    if (checked) {
      this.setState({ category: value });
    }
  }

  handleClick = () => {
    const { category, searchText } = this.state;

    this.setState({ isLoading: true });
    this.getProducts(category, searchText);
  }

  getProducts = async () => {
    const { category, searchText } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, searchText);
    this.setState({ isLoading: false, products: products.results });
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
    const MIN_NAME_LENGTH = 3;
    const { isLoading, category, searchText } = this.state;

    return (
      <main data-testid="home-initial-message">
        <section>
          <input
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
            onClick={ this.handleClick }
            disabled={ searchText.length < MIN_NAME_LENGTH }
          >
            Pesquisar
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            <span role="img" aria-label="shopping-cart">&#128722;</span>
          </Link>
        </section>
        <section>
          { isLoading ? <Loading /> : this.results() }
        </section>
        <Categories category={ category } onChange={ this.handleRadio } />
      </main>
    );
  }
}
