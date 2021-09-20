import React, { Component } from 'react';
import ItemCart from './ItemCart';
import '../css/shoppingCart.css';

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
        { cart.map((product) => (
          <ItemCart key={ product.title } product={ product } />
        ))}
      </div>
    );
  }
}
