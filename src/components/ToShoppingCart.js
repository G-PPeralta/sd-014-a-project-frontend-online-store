import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ToShoppingCart extends Component {
  updateCart() {
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const cartLength = cart.length;
      return cartLength;
    }
    return null;
  }

  render() {
    return (
      <div className="d-flex justify-content-end me-4">
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/ShoppingCart',
            state: { },
          } }
        >
          <i className="fas fa-shopping-cart" />
          <p data-testid="shopping-cart-size">{this.updateCart()}</p>
        </Link>
      </div>
    );
  }
}

// setInterval(new ToShoppingCart(), 2);
