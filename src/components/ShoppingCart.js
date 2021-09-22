import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import '../css/shoppingCart.css';
import ReturnShop from './ReturnShop';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalPrice: 0,
    };
  }

  async componentDidMount() {
    await this.verifyLocalStorage();
    this.atualizaPrice();
  }

  handleClick = (idx, numb) => {
    const { cart } = this.state;
    let { quantity } = cart[idx];
    const maxQuantity = cart[idx].available_quantity;
    if (numb > 0) {
      if (quantity === maxQuantity) return null;
      quantity += 1;
    } else {
      if (quantity === 1) return null;
      quantity -= 1;
    }
    cart[idx].quantity = quantity;
    this.setState({
      cart,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    this.atualizaPrice();
  }

  clickRemove = (idx) => {
    const { cart } = this.state;
    cart.splice(idx, 1);
    this.setState({
      cart,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    this.atualizaPrice();
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

  atualizaPrice() {
    const { cart } = this.state;
    const totalPrice = cart.reduce((acc, { quantity, price }) => {
      if (!quantity && !price) return 0;
      return acc + (quantity * price);
    }, 0).toFixed(2);
    this.setState({
      totalPrice,
    });
  }

  render() {
    const { cart, totalPrice } = this.state;
    if (cart.length === 0) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      );
    }
    return (
      <div>
        <ReturnShop props={ this.props } />
        { cart.map((product, idx) => (
          <ItemCart
            key={ product.title }
            product={ product }
            idx={ idx }
            handleClick={ this.handleClick }
            clickRemove={ this.clickRemove }
          />
        ))}
        <div className="d-flex justify-content-end m-3">
          <p>TOTAL R$ </p>
          <p>{totalPrice}</p>
        </div>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">Checkout</button>
        </Link>
      </div>
    );
  }
}
