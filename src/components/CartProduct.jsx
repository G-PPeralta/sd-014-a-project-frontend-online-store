import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CartProduct.css';

export default class CartProduct extends Component {
  render() {
    const {
      product,
      product: { title, thumbnail, id, price, quantity },
      removeProduct,
      changeProductQuantity,
    } = this.props;
    const QTY_VALUE = 1;
    return (
      <section className="div200">
        <button type="button" onClick={ () => removeProduct(id) }> X </button>
        <img alt={ title } className="product-thumbnail" src={ thumbnail } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => changeProductQuantity(product, -QTY_VALUE) }
        >
          -
        </button>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => changeProductQuantity(product, QTY_VALUE) }
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
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
  changeProductQuantity: PropTypes.func.isRequired,
};
