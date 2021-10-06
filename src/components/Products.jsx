import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import AddCartButton from './AddCartButton';

/* Pra formaatar o preço do produto, segui os passos de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat */

const formatPrice = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

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
        <div className="input-button">
          <input
            type="text"
            data-testid="query-input"
            id="input-search"
            className="input-search"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            id="btn-search"
            className="btn-search"
            data-testid="query-button"
            onClick={ this.fetchAPI }
          >
            Pesquisar
          </button>
        </div>
        {productsList.map((product) => (
          <div key={ product.id }>
            <Link
              data-testid="product-detail-link"
              to={ { pathname: `/product/${product.id}`, state: { product } } }
            >
              <div data-testid="product">
                <h3>{product.title}</h3>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{formatPrice(product.price)}</p>
              </div>
            </Link>
            <AddCartButton testeid="product-add-to-cart" product={ product } />
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
