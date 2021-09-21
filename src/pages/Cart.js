import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/shoppingCartAPI';

export default class Cart extends React.Component {
  render() {
    const items = api.readShoppingCart();
    if (!items.length) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <div data-testid="shopping-cart">
        Seu carrinho tem:
        { items.map((item, index) => (
          <div key={ index }>
            Nome:&nbsp;
            <div data-testid="shopping-cart-product-name">{ item.title }</div>
            Quantidade:&nbsp;
            <div data-testid="shopping-cart-product-quantity">{ item.shopping_cart }</div>
          </div>
        )) }
        <Link
          data-testid="checkout-products"
          to={ { pathname: '/checkout' } }
        >
          Finalize a compra
        </Link>
      </div>
    );
  }
}
