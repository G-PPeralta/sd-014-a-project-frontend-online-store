import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { readCartItens } from '../services/AddToCart';
import '../styles/products.css';

export default class CartList extends Component {
  constructor() {
    super();

    this.state = {
      itens: [],
    };
  }

  componentDidMount() {
    this.getCartItens();
  }

  handleCartList(itens) {
    return itens.map((item) => (
      <ul key={ item } className="product-list">
        <CartItem key={ item.id } item={ item } />
      </ul>));
  }

  getCartItens = () => {
    const itens = readCartItens();
    this.setState({
      itens,
    });
  }

  render() {
    const { itens } = this.state;

    return (
      <div>
        <h1> Carrinho: </h1>
        { this.handleCartList(itens) }
        <Link
          to="/checkout"
          data-testid="checkout-products"
          className="checkout-btn"
        >
          Finalizar a compra
        </Link>
      </div>
    );
  }
}
