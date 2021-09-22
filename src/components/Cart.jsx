import React, { Component } from 'react';

/* Pra formaatar o preço do produto, segui os passos de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat */

const formatPrice = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.list = this.list.bind(this);
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
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{item.id}</p>
            <p>{formatPrice(item.price)}</p>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
