import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default class CartButton extends Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
        className="btn btn-primary h-auto py-2 px-3"
      >
        <FaShoppingCart className="fs-5" />
      </Link>
    );
  }
}
