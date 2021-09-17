import React, { Component } from 'react';

import HomeButton from '../components/HomeButton';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    document.title = 'Carrinho';
  }

  render() {
    return (
      <main>
        <HomeButton />
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </main>
    );
  }
}
