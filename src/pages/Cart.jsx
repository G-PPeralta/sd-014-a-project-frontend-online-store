import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ShoppingCart from '../services/image/ShoppingCart.svg';
import LeftArrow from '../services/image/LeftArrow.svg';
import BoxOpen from '../services/image/package-box-open.svg';

class Cart extends React.Component {
  render() {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    return (
      <section>
        <Link to="/">
          <img src={ LeftArrow } alt="arrow" />
        </Link>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ ShoppingCart } alt="shopping cart" />
        </Link>
        <img src={ BoxOpen } alt="Box Open Empty" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <ul>
          {storage.map((product) => (
            <li
              key={ product.id }
              data-testid="shopping-cart-product-name"
            >
              { product.title }
            </li>))}
        </ul>
        <p data-testid="shopping-cart-product-quantity">{storage.length}</p>
      </section>
    );
  }
}
export default Cart;
