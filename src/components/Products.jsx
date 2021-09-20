import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productsList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  fetchAPI() {
    const { search } = this.state;
    getProductsFromCategoryAndQuery('', search).then((query) => {
      this.setState({ productsList: query.results });
    });
  }

  render() {
    const { search, productsList } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchAPI }
        >
          Pesquisar
        </button>
        { productsList.map((product) => (
          <div data-testid="product" key={ product.id }>
            <h3>{ product.title }</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price }</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
