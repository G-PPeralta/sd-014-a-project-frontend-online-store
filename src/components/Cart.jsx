import React, { Component } from 'react';
import CartProduct from './CartProduct';

/* Pra formaatar o preço do produto, segui os passos de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat */

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      qtde: 1,
    };
    this.list = this.list.bind(this);
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.list();
  }

  list() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this.setState({ cart });
    }
  }

  decrease() {
    this.setState((prevState) => ({
      qtde: prevState.qtde - 1,
    }));
  }

  increase() {
    this.setState((prevState) => ({
      qtde: prevState.qtde + 1,
    }));
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        {cart.map((item) => (
          <CartProduct key={ item.id } item={ item } />
        ))}
      </div>
    );
  }
}

export default Cart;
