import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import { readCartItems } from '../services/cartAPI';

export default class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.fetchCartItems();
  }

  fetchCartItems = () => {
    const cartItems = readCartItems();
    this.setState({ cartItems });
  }

  renderCartItems(cartItems) {
    return cartItems.map(({ id, title, price }) => (
      <div key={ id }>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <h2>{ price }</h2>
        <h2 data-testid="shopping-cart-product-quantity">quantidade</h2>
      </div>
    ));
  }

  renderEmptyCart() {
    return (
      <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
    );
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <CartButton />
        { cartItems.length > 0 ? this.renderCartItems(cartItems) : this.renderEmptyCart()}
      </div>
    );
  }
}
