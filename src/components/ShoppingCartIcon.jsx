import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../services/image/ShoppingCart.svg';

class ShoppingCartIcon extends React.Component {
  constructor() {
    const cartStorage = JSON.parse(localStorage.getItem('carrinho'));
    const quant = cartStorage.reduce((quantidade, soma) => quantidade + soma.quantity, 0);
    super();

    this.state = {
      products: quant,
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ ShoppingCart } alt="shopping cart" />
        </Link>
        <span data-testid="shopping-cart-size">{products}</span>
      </div>
    );
  }
}

export default ShoppingCartIcon;
