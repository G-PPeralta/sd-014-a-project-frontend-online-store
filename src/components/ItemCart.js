import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends Component {
  render() {
    const { product, handleClick, idx } = this.props;
    const { title, thumbnail, quantity } = product;
    const DECREASE = -1;
    return (
      <div className="border border-dark d-flex justify-content-around">
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
      </div>
    );
  }
}

ItemCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
};
