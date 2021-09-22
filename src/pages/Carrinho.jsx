import React from 'react';
import CartProducts from '../components/CartProducts';

const CART_KEY = 'cart';

class Carrinho extends React.Component {
  constructor() {
    super();

    this.state = {
      carrinho: [],
    };
    this.mudaEstado = this.mudaEstado.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.handleUpdate();
  }

  handleUpdate() {
    const produtos = JSON.parse(localStorage.getItem(CART_KEY));
    if (produtos) {
      //  console.log(produtos);
      this.mudaEstado(produtos);
    }
  }

  mudaEstado(produtos) {
    this.setState({ carrinho: produtos });
  }

  render() {
    const { carrinho } = this.state;
    if (carrinho.length > 0) {
      return (<CartProducts
        metodo={ this.handleUpdate }
        carrinho={ carrinho }
      />);
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
