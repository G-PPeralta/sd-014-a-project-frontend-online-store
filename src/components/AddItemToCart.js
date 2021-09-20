import React from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/shoppingCartAPI';

export default class AddItemToCart extends React.Component {
  handleClick = () => {
    const { product } = this.props;

    api.addItemToCart(product);
  }

  render() {
    const { dataTestId } = this.props;

    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ this.handleClick }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddItemToCart.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  product: PropTypes.objectOf(PropTypes.any).isRequired,
}.isRequired;
