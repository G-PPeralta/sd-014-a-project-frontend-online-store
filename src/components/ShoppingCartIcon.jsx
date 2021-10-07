import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../services/image/ShoppingCart.svg';

class ShoppingCartIcon extends React.Component {
  render() {
    // const { cart } = this.props;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ ShoppingCart } alt="shopping cart" />
        </Link>
        <span data-testid="shopping-cart-size"> Items </span>
      </div>
    );
  }
}

export default ShoppingCartIcon;
