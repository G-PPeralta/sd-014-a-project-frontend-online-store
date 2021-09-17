import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartButton extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        Carrinho
      </Link>
    );
  }
}
