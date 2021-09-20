import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingIcon extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">
        <img src="https://image.flaticon.com/icons/png/512/57/57451.png" width="40px" alt="Shopping Icon" />
      </Link>
    );
  }
}
