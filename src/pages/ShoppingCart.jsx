import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
    };
  }

  componentDidMount() {
    this.localStorage();
  }

  localStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart-products'));
    this.setState({ cartProducts: savedCart });
  }

  cartProductsFunc() {
    const { cartProducts } = this.state;
    if (cartProducts !== null) {
      return (
        cartProducts.map(({ title, thumbnail, price, productQty }) => (
          <div key={ title } className="product-card">
            <p data-testid="shopping-cart-product-name">
              {title}
            </p>
            <img alt={ title } className="product-thumbnail" src={ thumbnail } />
            <p>{`R$${price.toFixed(2)}`}</p>
            <p data-testid="shopping-cart-product-quantity">{`Qtd: ${productQty}`}</p>
          </div>
        )));
    }
    return (
      <div>
        <img
          alt="empty-box"
          src="https://img.icons8.com/ios/100/000000/empty-box.png"
        />
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link className="return-button" to="/">
          <img
            alt="return-button"
            src="https://img.icons8.com/ios/50/000000/left2.png"
          />
        </Link>
        <div className="shopping-cart-field">
          <img
            alt="shopping-cart"
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          />
          <h2>Carrinho de Compras</h2>
        </div>
        <main className="cart-product-list">
          {this.cartProductsFunc()}
        </main>
      </div>
    );
  }
}
