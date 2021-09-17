import React from 'react';

class MyCart extends React.Component {
  constructor() {
    super();

    this.state = {
      inCart: [],
    };
  }

  // Verifica se mensagem deve ser mostrada
  emptyCartMessage = () => 'Seu carrinho está vazio'

  render() {
    const { inCart } = this.state;
    return (
      <main>
        <h2 data-testid="shopping-cart-empty-message">
          {inCart.length < 1 && this.emptyCartMessage()}
        </h2>
      </main>
    );
  }
}

export default MyCart;
