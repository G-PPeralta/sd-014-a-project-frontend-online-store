import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartImg from './ShoppingCartImg';

class ShoppingCartLink extends React.Component {
  render() {
    return (
      <div>
        <Link
        to="/shopping-cart"
        data-testid="shopping-cart-button"
        >
          <ShoppingCartImg />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartLink;
