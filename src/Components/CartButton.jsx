import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <span>
        <Link to="/MyCart" data-testid="shopping-cart-button">Meu Carrinho</Link>
      </span>
    );
  }
}

export default CartButton;
// FUNCIONA AAAAAAAA
