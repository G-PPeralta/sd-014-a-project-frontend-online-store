import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
      >
        Carrinho de compras
      </Link>
    );
  }
}

export default CartButton;
