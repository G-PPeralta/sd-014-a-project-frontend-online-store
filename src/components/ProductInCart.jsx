import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProductInCart extends Component {
  render() {
    const { item: { product, quantity } } = this.props;
    return (
      <>
        <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
        <p>{ product.price }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button type="button">-</button>
        <button type="button">+</button>
      </>
    );
  }
}

ProductInCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductInCart;
