import React from 'react';
import * as cart from '../services/cart';

class MyCart extends React.Component {
  constructor() {
    super();

    this.state = {
      inCart: [],
    };
  }
// ye
  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const productsInCart = cart.readProductsInCart();
    this.setState({ inCart: productsInCart });
  }

  emptyCartMessage = () => 'Seu carrinho está vazio';

  renderCart = () => {
    const { inCart } = this.state;

    return inCart.map((product) => (
      <div key={ product.id }>
        <h2 data-testid="shopping-cart-product-name">{product.title}</h2>
        <h3 data-testid="shopping-cart-product-quantity">1</h3>
      </div>
    ));
  }

  render() {
    const { inCart } = this.state;

    return (
      <main>
        <h2 data-testid="shopping-cart-empty-message">
          { inCart.length < 1 ? this.emptyCartMessage() : this.renderCart() }
        </h2>
      </main>
    );
  }
}

export default MyCart;
