import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';

export default class CartButton extends Component {
  render() {
    return (
      <div id="cart-button-container">
        <Link
          to="/cart"
          className="btn btn-outline-primary btn-large"
          data-testid="shopping-cart-button"
        >
          <Cart />
        </Link>
      </div>
    );
  }
}
