import React from 'react';

class ShopCart extends React.Component {
  render() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }
}

export default ShopCart;
