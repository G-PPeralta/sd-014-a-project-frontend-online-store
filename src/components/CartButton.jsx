import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';

export default class CartButton extends Component {
  render() {
    return (
      <div id="cart-button-container">
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
          className="nav-link"
        >
          <Cart size={ 30 } />
        </Link>
      </div>
    );
  }
}
