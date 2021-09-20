import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();
    this.state = { quantidade: 0 };
  }

  render() {
    const { quantidade } = this.state;
    return (
      (quantidade === 0)
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>
        : null
    );
  }
}

export default Cart;
