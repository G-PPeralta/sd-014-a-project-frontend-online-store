import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CartProduct.css';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      product,
      product: { title, thumbnail, id },
      removeProduct,
      changeProductQuantity,
      quantity,
    } = this.props;
    return (
      <section className="div200">
        <button type="button" onClick={ () => removeProduct(id) }> X </button>
        <img alt={ title } className="product-thumbnail" src={ thumbnail } />
        <h2>{ title }</h2>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => changeProductQuantity(product, '-') }
        >
          -
        </button>
        <h3>{ quantity }</h3>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ changeProductQuantity(product, '+') }
        >
          +
        </button>
      </section>
    );
  }
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
  changeProductQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
