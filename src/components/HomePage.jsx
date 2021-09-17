import React, { Component } from 'react';
import CartButton from './CartButton';

export default class HomePage extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        <CartButton />
      </div>
    );
  }
}
