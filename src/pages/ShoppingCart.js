import React from 'react';
import ShoppingCartImg from '../components/ShoppingCartImg';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartImg />
        <p data-testid="shopping-cart-empty-message">"Seu carrinho está vazio"</p>
      </div>
    );
  }
}

export default ShoppingCart;
