import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <span>
        <Link data-testid="shopping-cart-button" to="/mycart">Meu carrinho</Link>
      </span>
    );
  }
}

export default CartButton;
