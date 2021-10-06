import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ToShoppingCart extends Component {
  updateCart() {
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const cartLength = cart.reduce((acc, { quantity }) => acc + quantity, 0);
      return cartLength;
    }
    return null;
  }

  render() {
    return (
      <div className="d-flex justify-content-end navbar">
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/ShoppingCart',
            state: { },
          } }
          className="d-flex align-items
          -center text-decoration-none
          icon-cart justify-content-center"
        >
          <div className="d-flex align-items-center">
            <i className="fas fa-shopping-cart fs-4" />
            <p
              className="m-0 align-self-end mb-2 cart-number"
              data-testid="shopping-cart-size"
            >
              {this.updateCart()}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

// setInterval(new ToShoppingCart(), 2);
