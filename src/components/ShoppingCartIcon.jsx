import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProducts: 0,
    };
    this.localStorageKey = 'cart-products';
  }

  componentDidMount() {
    const totalProducts = JSON.parse(
      localStorage.getItem(this.localStorageKey),
    );
    if (totalProducts) {
      const totalProductsCount = totalProducts.reduce(
        (acc, product) => acc + product.quantity,
        0,
      );
      const newState = { totalProducts: totalProductsCount };
      this.updateState(newState);
    }
  }

  shouldComponentUpdate() {
    const { totalProducts } = this.state;
    const updatedProducts = JSON.parse(
      localStorage.getItem(this.localStorageKey),
    );
    const updatedTotalProducts = updatedProducts
      ? updatedProducts.reduce((acc, product) => acc + product.quantity, 0)
      : 0;
    return totalProducts !== updatedTotalProducts;
  }

  componentDidUpdate() {
    const updatedProducts = JSON.parse(
      localStorage.getItem(this.localStorageKey),
    );
    const updatedTotalProducts = updatedProducts
      ? updatedProducts.reduce((acc, product) => acc + product.quantity, 0)
      : 0;
    const newState = { totalProducts: updatedTotalProducts };
    this.updateState(newState);
  }

  updateState = (newState) => this.setState(newState);

  render() {
    const { totalProducts } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img
            alt="shopping-cart"
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          />
        </Link>
        <span data-testid="shopping-cart-size">{totalProducts}</span>
      </div>
    );
  }
}
