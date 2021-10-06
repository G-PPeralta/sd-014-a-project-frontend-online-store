import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import Products from './Products';

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
        <header>
          <img className="img-logo" src="https://logodownload.org/wp-content/uploads/2017/11/kabum-logo-4.png" alt="logo" />
          <div className="pesquisa">
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <Products />
          </div>
          <Link data-testid="shopping-cart-button" to="/cart">
            <img className="img-cart" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-shopping-cart-interface-kiranshastry-solid-kiranshastry.png" alt="cart" />
          </Link>
        </header>
        <div className="content-cart">
          <div className="page-cart">
            {cart.map((item) => (
              <CartProduct key={ item.id } item={ item } />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
