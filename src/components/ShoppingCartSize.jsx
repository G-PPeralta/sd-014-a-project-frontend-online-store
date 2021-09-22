import React, { Component } from 'react';



export default class CartQuantityElement extends Component {
  constructor(props) {
    super(props);

    this.getNumberOfProductsInCart = this.getNumberOfProductsInCart.bind(this);
  }

  getNumberOfProductsInCart() {
    let totalProducts = 0;
    const cartProducts = JSON.parse(localStorage.getItem('cart-products'));
    cartProducts.forEach((p) => {
      totalProducts += p.productQty;
    });
    return totalProducts;
  }

  render() {
    return (
      <div>
        <p>{ this.getNumberOfProductsInCart }</p>
      </div>
    );
  }
}
