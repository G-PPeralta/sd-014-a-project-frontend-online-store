import React, { Component } from 'react';
import '../styles/products.css';

export default class TotalyProduct extends Component {
  render() {
    return (
      <div>
        <div data-testid="shopping-cart-size" className="total-products" />
      </div>
    );
  }
}
