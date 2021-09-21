import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
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
  };

  renderCartItems(cartItems) {
    return cartItems.map((item) => <CartItem key={ item.id } product={ item } />);
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
        {cartItems.length > 0
          ? this.renderCartItems(cartItems)
          : this.renderEmptyCart()}
        <Link
          data-testid="checkout-products"
          to="/checkout"
          className="btn btn-primary"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}
