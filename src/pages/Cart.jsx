import React from 'react';
import { getCartItems } from '../services/cart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  fetchCart = async () => {
    const cart = await getCartItems();
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <section>
        <h1>Carrinho de compras</h1>
        { cart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            <ul>
              { cart.map(({ title, price, qty, productId }) => (
                <li key={ productId }>
                  <span data-testid="shopping-cart-product-name">{ title }</span>
                  <span>{ qty }</span>
                  <span data-testid="shopping-cart-product-quantity">{ price }</span>
                </li>
              )) }
            </ul>
          )}
      </section>
    );
  }
}

export default Cart;
