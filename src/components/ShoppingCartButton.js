import React from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <span className="shopping-cart" role="img" aria-label="shopping-cart">
          &#128722;
        </span>
      </Link>
    );
  }
}
