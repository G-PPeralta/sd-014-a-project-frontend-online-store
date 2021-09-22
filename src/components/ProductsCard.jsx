import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addToCart from '../services/localstorage';

class ProductsCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    const { product } = this.props;
    return (
      <li data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `${title}_image` } />
        <p>{ price }</p>
        <button
          type="button"
          onClick={ () => addToCart(product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </li>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
