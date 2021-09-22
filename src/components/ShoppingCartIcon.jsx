import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartIcon extends Component {
  constructor(props) {
    super(props);

    this.getNumberOfProductsInCart = this.getNumberOfProductsInCart.bind(this);
  }

  getNumberOfProductsInCart() {
    let totalProducts = 0;
    const cartProducts = JSON.parse(localStorage.getItem('cart-products'));
    if(cartProducts) {
      cartProducts.forEach((p) => {
        totalProducts += p.productQty;
      });
      return totalProducts;
    }
    return 0;
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
        <p>{ this.getNumberOfProductsInCart }</p>
      </div>
    );
  }
}
