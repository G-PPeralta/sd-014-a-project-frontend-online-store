import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../services/image/ShoppingCart.svg';

class ShoppingCartIcon extends React.Component {
  constructor() {
    const cartStorage = JSON.parse(localStorage.getItem('carrinho'));
    super();

    this.state = {
      products: cartStorage.length,
    };

    this.productsUpdate = this.productsUpdate.bind(this);
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ ShoppingCart } alt="shopping cart" />
        </Link>
        <span>{products}</span>
      </div>
    );
  }
}

export default ShoppingCartIcon;
