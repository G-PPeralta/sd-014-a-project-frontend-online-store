import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addQuantity } from '../services/localstorage';

export class ProductInCart extends Component {
  addQuantity({ target: { name, id } }) {
    if (name === 'sum') addQuantity(id, 'sum');
    if (name === 'sub') addQuantity(id, 'sub');
    console.log(id);
  }

  render() {
    const { item: { product, quantity } } = this.props;
    return (
      <>
        <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
        <p>{ product.price }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <p>{`Preço total: ${Number(product.price) * Number(quantity)}`}</p>
        <button
          id={ product.id }
          name="sub"
          type="button"
          onClick={ this.addQuantity }
          data-testid="product-increase-quantity"
        >
          -
        </button>
        <button
          id={ product.id }
          name="sum"
          type="button"
          onClick={ this.addQuantity }
          data-testid="product-decrease-quantity"
        >
          +
        </button>
      </>
    );
  }
}

ProductInCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductInCart;
