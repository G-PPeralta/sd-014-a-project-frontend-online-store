import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <span>
        <Link data-testid="shopping-cart-button" to="/MyCart">Meu Carrinho</Link>
      </span>
    );
  }
}

export default CartButton;
