import React, { Component } from 'react';
import CartButton from '../components/CartButton';

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        <CartButton />
      </div>
    );
  }
}
