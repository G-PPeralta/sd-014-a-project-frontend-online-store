import React from 'react';
import { Link } from 'react-router-dom';
import '../services/localstorage';
import ProducInCart from '../components/ProductInCart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
    this.state = {
      items: '',
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const items = localStorage.getObj('products');
    this.setState({
      items,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <main>
        { items
          ? (Object.entries(items)
            .map((item) => <ProducInCart key={ item[0] } item={ item[1].product.id } />))
          : (
            <h1 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h1>) }
        <button
          type="submit"
          data-testid="checkout-products"
        >
          <Link to="/checkout">
            Finalizar Compra
          </Link>
        </button>
      </main>
    );
  }
}

export default Cart;
