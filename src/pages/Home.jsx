import React from 'react';

import { BsSearch } from 'react-icons/bs';

import Categories from '../components/Categories';
import HomeMessage from '../components/HomeMessage';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      category: '',
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  getProducts() {
    const { search, category } = this.state;
    this.setState(async () => {
      const products = await getProductsFromCategoryAndQuery(category, search);
      this.setState({ products: products.results });
    });
  }

  render() {
    const { search, products } = this.state;
    return (
      <main className="d-flex justify-content-start">
        <Categories onChange={ this.handleChange } />
        <section className="d-flex flex-column">
          <input
            data-testid="query-input"
            type="text"
            placeholder="Busca"
            name="search"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.getProducts }
            data-testid="query-button"
          >
            <BsSearch />
          </button>
          <HomeMessage />
          <ProductList products={ products } />
        </section>
      </main>
    );
  }
}

export default Home;
