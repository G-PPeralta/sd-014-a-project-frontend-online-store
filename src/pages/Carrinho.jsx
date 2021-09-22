import React from 'react';
import { Link } from 'react-router-dom';
import CartProducts from '../components/CartProducts';

const CART_KEY = 'cart';
const QTD_KEY = 'qtd';

class Carrinho extends React.Component {
  constructor() {
    super();

    this.state = {
      carrinho: [],
      quantity: [],
    };
    this.mudaEstado = this.mudaEstado.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.handleUpdate();
  }

  handleUpdate() {
    const produtos = JSON.parse(localStorage.getItem(CART_KEY));
    const quantity = JSON.parse(localStorage.getItem(QTD_KEY));
    if (produtos) {
      //  console.log(produtos);
      this.mudaEstado(produtos, 'carrinho');
    }
    if (quantity) {
      this.mudaEstado(quantity, 'quantity')
    }
  }

  mudaEstado(produtos, key) {
    this.setState({ [`${key}`]: produtos });
  }

  render() {
    const { carrinho } = this.state;
    if (carrinho.length > 0) {
      return (
        <>
          <CartProducts
            metodo={ this.handleUpdate }
            carrinho={ carrinho }
          />
          <Link to="/checkout">
            <button
              type="button"
              className="bt-container"
              data-testid="checkout-products"
            >
              Checkout
            </button>
          </Link>
        </>
      );
    }
    return (
      <section>
        <section>
          <h1
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h1>
        </section>
      </section>
    );
  }
}

export default Carrinho;
