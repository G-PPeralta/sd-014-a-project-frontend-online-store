import React from 'react';
import { Link } from 'react-router-dom';
import { CartProduct } from '../components/CartProduct';
import { getter, saver, subtractor } from '../services/StorageServices';

class shoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
    };
  }

  componentDidMount() {
    this.loadFromCart();
  }

  loadFromCart = () => {
    const cart = getter();
    this.setState({
      produtos: cart,
    });
  }

  clickHandler = (produto, target) => {
    if (target.value === '+') {
      saver(produto);
      this.loadFromCart();
    }
    if (target.value === '-') {
      subtractor(produto);
      this.loadFromCart();
    }
  };

  render() {
    const { produtos } = this.state;
    if (produtos.length === 0) {
      return (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>);
    }
    return (

      <div>
        {produtos.map((produto) => (
          <CartProduct
            key={ produto.id }
            produto={ produto }
            contador={ produto.quantidade }
            clickHandler={ this.clickHandler }
          />
        ))}
        <Link to="/checkout">
          <button
            data-testid="checkout-products"
            type="button"
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default shoppingCart;
