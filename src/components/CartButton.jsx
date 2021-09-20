import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </div>
    );
  }
}

export default CartButton;
