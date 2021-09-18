import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class CartButton extends Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
      >
        <CartIcon />
      </Link>
    );
  }
}

export default CartButton;
