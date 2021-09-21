import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ToShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/ShoppingCart',
            state: { },
          } }
        >
          Carrinho
        </Link>
      </div>
    );
  }
}
