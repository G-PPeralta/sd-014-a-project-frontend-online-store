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

  handleClick = (idx, numb) => {
    const { cart } = this.state;
    console.log(cart);
    let { quantity } = cart[idx];
    if (numb > 0) {
      quantity += 1;
    } else {
      if (quantity === 1) return null;
      quantity -= 1;
    }
    cart[idx].quantity = quantity;
    console.log(cart);
    this.setState({
      cart,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
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
        { cart.map((product, idx) => (
          <ItemCart
            key={ product.title }
            product={ product }
            idx={ idx }
            handleClick={ this.handleClick }
          />
        ))}
      </div>
    );
  }
}
