import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProduct extends Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div
        data-testid="product"
        className="d-flex
        flex-column
        m-3 p-2 justify-content-around
        align-items-center card-product"
      >
        <img src={ thumbnail } alt={ title } />
        <h5>{ title }</h5>
        <p>{ `R$${price}`}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
CardProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
