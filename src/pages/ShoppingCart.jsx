import React, { Component } from 'react';
import ProductCartCard from '../components/ProductCartCard';
import { getCartProductsAndQuantity } from '../services/local';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItens: [],
      itensQuantity: {},
    };
    this.getItens = this.getItens.bind(this);
    this.loadCart = this.loadCart.bind(this);
  }

  componentDidMount() {
    this.getItens();
  }

  getItens() {
    const cartInformation = getCartProductsAndQuantity();
    this.setState({ cartItens: cartInformation[0], itensQuantity: cartInformation[1] });
  }

  loadCart() {
    const { itensQuantity, cartItens } = this.state;
    return (
      <div>
        {cartItens.map((product) => (<ProductCartCard
          key={ product.id }
          product={ product }
          quantity={ itensQuantity[product.id] }
        />))}
      </div>
    );
  }

  render() {
    const { cartItens } = this.state;
    return (
      <div>
        {cartItens ? this.loadCart()
          : (<h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)}
      </div>
    );
  }
}

export default ShoppingCart;
