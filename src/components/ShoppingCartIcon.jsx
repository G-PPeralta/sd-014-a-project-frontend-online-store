import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartIcon extends Component {
  constructor(props) {
    super(props);

    this.getNumberOfProductsInCart = this.getNumberOfProductsInCart.bind(this);
  }

  getNumberOfProductsInCart() {
    const cartProducts = JSON.parse(localStorage.getItem('cart-products'));
    if (cartProducts) {
      const totalProducts = cartProducts.reduce(
        (acc, product) => acc + product.productQty,
        0,
      );
      return <span data-testid="shopping-cart-size">{totalProducts}</span>;
    }

    return <span data-testid="shopping-cart-size">0</span>;
  }

  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img
            alt="shopping-cart"
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          />
        </Link>
        {this.getNumberOfProductsInCart()}
      </div>
    );
  }
}
