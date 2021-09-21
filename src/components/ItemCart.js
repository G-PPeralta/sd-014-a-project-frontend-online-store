import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends Component {
  render() {
    const { product, handleClick, idx, clickRemove } = this.props;
    const { title, thumbnail, quantity, price } = product;
    const DECREASE = -1;
    return (
      <div className="border border-dark d-flex justify-content-around m-3 p-3">
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <p data-testid="shopping-cart-product-name">{ title }</p>
        </div>
        <div>
          <p>Quantidade:</p>
          <div className="d-flex justify-content-around">
            <div
              data-testid="product-increase-quantity"
              className="botao"
              onClick={ () => handleClick(idx, 1) }
              role="button"
              aria-hidden="true"
            >
              <i className="fas fa-chevron-up" />
            </div>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            <div
              data-testid="product-decrease-quantity"
              className="botao"
              onClick={ () => handleClick(idx, DECREASE) }
              role="button"
              aria-hidden="true"
            >
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p>Preço Unitário:</p>
          <p>{`R$${price.toFixed(2)}`}</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p>Preço total:</p>
          <p>{`R$${(price * quantity).toFixed(2)}`}</p>
        </div>
        <div
          className="botao d-flex align-items-center"
          onClick={ () => clickRemove(idx) }
          role="button"
          aria-hidden="true"
        >
          <i className="far fa-trash-alt" />
        </div>
      </div>
    );
  }
}

ItemCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
  clickRemove: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
};
