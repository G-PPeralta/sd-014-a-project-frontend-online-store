import React from 'react';

import { BsSearch } from 'react-icons/bs';

import Categories from '../components/Categories';
import HomeMessage from '../components/HomeMessage';
import ProductList from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      category: '',
      products: [],
      hideProducts: true,
    };
    this.getProducts = this.getProducts.bind(this);
  }

  handleSearch = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  handleSelect = ({ target: { value } }) => {
    this.setState({ category: value });
  }

  handleClick = () => {
    const { search, category } = this.state;
    this.getProducts(category, search);
  }

  async getProducts(query, category) {
    this.setState(async () => {
      const requestProducts = await getProductsFromCategoryAndQuery(query, category);
      const products = requestProducts.results;
      this.setState({ products });
      this.setState({ hideProducts: false });
    });
  }

  render() {
    const { search, hideProducts, products } = this.state;
    return (
      <main className="d-flex justify-content-start">
        <Categories onChange={ this.handleSelect } />
        <section className="d-flex flex-column">
          <form>
            <input
              type="text"
              value={ search }
              data-testid="query-input"
              onChange={ this.handleSearch }
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              <BsSearch />
            </button>
          </form>
          {hideProducts ? <HomeMessage /> : <ProductList products={ products } />}
        </section>
      </main>
    );
  }
}

export default Home;
