import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

// import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from './CartButton';
import Categories from '../components/Categories';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      resultQuery: [],
      searchText: '',
      categoriaDeProduto: '',
      categories: [],
    };

    // this.callGetProductsFromCategoryAndQuery = this
      // .callGetProductsFromCategoryAndQuery.bind(this);
    this.callGetCategories = this.callGetCategories.bind(this);
    this.callApi = this.callApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleCategory(event) {
    this.setState({ categoriaDeProduto: event.target.value });
    alert('oi');
  }

  callApi() {
    const { searchText, categoriaDeProduto } = this.state;
    getProductsFromCategoryAndQuery(searchText, categoriaDeProduto)
      .then((result) => this.setState({ resultQuery: result.results }));
  }

  async callGetCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  componentDidMount() {
    this.callGetCategories();
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="searchText">
          <input
            type="text"
            name="searchText"
            id="searchText"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.callApi }
        >
          Pesquisar Produtos
        </button>
        <CartButton />
        <nav className="side-nav-categories">
          { categories.map((category) => (
            <Categories
              key={ category.id }
              category={ category }
              onClick={ this.handleCategory }
            />
          ))}
        </nav>
      </div>
    );
  }
}

ProductList.propTypes = {
  searchText: PropTypes.string.isRequired,
  categoriaDeProduto: PropTypes.string.isRequired,
};

export default ProductList;
