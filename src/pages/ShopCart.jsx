import React from 'react';

class ShopCart extends React.Component {
  render() {
    const storage = JSON.parse(localStorage.getItem('cartList'));
    return (
      <main>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <ul>
          {storage.map((product) => (
            <li
              key={ product.id }
              data-testid="shopping-cart-product-name"
            >
              { product.title }
            </li>))}
        </ul>
        <p data-testid="shopping-cart-product-quantity">{storage.length}</p>
      </main>
    );
  }
}

export default ShopCart;
