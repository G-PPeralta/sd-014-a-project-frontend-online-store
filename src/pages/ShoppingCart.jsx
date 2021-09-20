import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link className="return-button" to="/">
          <img
            alt="return-button"
            src="https://img.icons8.com/ios/50/000000/left2.png"
          />
        </Link>
        <div className="shopping-cart-field">
          <img
            alt="shopping-cart"
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          />
          <h2>Carrinho de Compras</h2>
        </div>
        <main className="cart-product-list">
          <img
            alt="empty-box"
            src="https://img.icons8.com/ios/100/000000/empty-box.png"
          />
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        </main>
      </div>
    );
  }
}
