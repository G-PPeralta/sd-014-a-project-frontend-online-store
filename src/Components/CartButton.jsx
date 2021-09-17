import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <span data-testid="shopping-cart-button">
        <Link to="/MyCart">Meu Carrinho</Link>
      </span>
    );
  }
}

export default CartButton;
