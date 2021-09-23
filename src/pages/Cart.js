import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddProductCart from '../components/AddProductCart';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      storageCartItems: JSON.parse(localStorage.getItem('cart')),
    };
  }

  renderCartItems() {
    const { storageCartItems } = this.state;
    return (
      <>
        {storageCartItems.map((product) => (
          <AddProductCart key={ product.id } product={ product } />
        ))}
        <button
          data-testid="shopping-cart-button"
          type="button"
        >
          <Link
            to="/Cart"
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao Carrinho
          </Link>
        </button>
        <span>Valor total da Compra: $</span>
        <div>
          <button type="button">Finalizar compra</button>
        </div>
      </>
    );
  }

  render() {
    const { storageCartItems } = this.state;
    return (
      <div>
        {storageCartItems
          ? this.renderCartItems()
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}
