import React from 'react';
import ShoppingCartImg from '../components/ShoppingCartImg';

class ShoppingCart extends React.Component {
  render() {
    const obj = [];
    obj.push(localStorage.getItem('title'));

    if (localStorage.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <>
        <p data-testid="shopping-cart-product-name">
          {localStorage.getItem('title')}
        </p>
        <p>{`R$${localStorage.getItem('price')}`}</p>
        <p data-testid="shopping-cart-product-quantity">{`Quandidade: ${obj.length}`}</p>
        <ShoppingCartImg />
      </>
    );
  }
}

export default ShoppingCart;
