import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends Component {
  render() {
    const { product } = this.props;
    const { title, quantity, thumbnail } = product;
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
            <div className="botao"><i className="fas fa-chevron-up" /></div>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            <div className="botao"><i className="fas fa-chevron-down" /></div>
          </div>
        </div>
      </div>
    );
  }
}

ItemCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
