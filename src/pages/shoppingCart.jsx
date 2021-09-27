import React from 'react';
import { Link } from 'react-router-dom';
import { CartProduct } from '../components/CartProduct';
import { getter } from '../services/StorageServices';

class shoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      contadores: {},
    };
  }

  componentDidMount() {
    this.loadFromCart();
  }

  loadFromCart = () => {
    const cart = getter();
    // const counters = counterGetter();
    this.setState({
      produtos: cart,
    });
    // if (cart.length >= 1) this.setState({ contadores: counters });
  }

  render() {
    const { produtos, contadores } = this.state;
    if (produtos.length === 0) {
      return (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>);
    }
    return (
      <div>
        {produtos.map((produto) => (
          <CartProduct
            key={ produto.id }
            produto={ produto }
            contador={ contadores[`${produto.id}`] }
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
