import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.verifyLocalStorage();
  }

  verifyLocalStorage() {
    if (localStorage.cart) {
      const { cart } = localStorage;
      const cartJSON = JSON.parse(cart);
      this.setState({
        cart: cartJSON,
      });
    }
  }

  render() {
    const { cart } = this.state;

    if (cart.length === 0) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      );
    }
    return (
      <div>
        { cart.map(({ title, id, quantity }) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          </div>
        ))}
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">Checkout</button>
        </Link>
      </div>
    );
  }
}
