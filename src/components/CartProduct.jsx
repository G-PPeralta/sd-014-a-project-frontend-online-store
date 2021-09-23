import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CartProduct.css';

export default class CartProduct extends Component {
  render() {
    const {
      product,
      product: { title, thumbnail, id, price, quantity, availableQuantity },
      removeProduct,
      changeProductQuantity,
    } = this.props;
    return (
      <section className="shopping-cart-product-item">
        <button type="button" onClick={ () => removeProduct(id) }>
          {' '}
          X
          {' '}
        </button>
        <img alt={ title } className="product-thumbnail" src={ thumbnail } />
        <p
          className="shopping-cart-product-name"
          data-testid="shopping-cart-product-name"
        >
          {title}
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => changeProductQuantity(product, '-') }
        >
          -
        </button>
        <h3 data-testid="shopping-cart-product-quantity">{quantity}</h3>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => changeProductQuantity(product, '+') }
          disabled={ quantity >= availableQuantity }
        >
          +
        </button>
        <p>{`R$${price.toFixed(2)}`}</p>
      </section>
    );
  }
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    availableQuantity: PropTypes.number,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
  changeProductQuantity: PropTypes.func.isRequired,
};
