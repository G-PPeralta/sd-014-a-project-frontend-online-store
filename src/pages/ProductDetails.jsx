import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingIcon from '../components/ShoppingIcon';
import { addProduct } from '../services/addFunctions';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  handleClick = () => {
    const { product } = this.state;
    addProduct(product);
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        <ShoppingIcon />
        <h3 data-testid="product-detail-name">
          { product.title }
        </h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <h3>
          { `R$${product.price}`}
        </h3>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
