import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddToCart extends Component {
  render() {
    const { produto, addCartHandle } = this.props;
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="submit"
          onClick={ () => addCartHandle(produto) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddToCart.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  addCartHandle: PropTypes.func.isRequired,
};

export default AddToCart;
