import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.getCartItems = this.getCartItems.bind(this);
    this.productCard = this.productCard.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const { cartItems } = localStorage;
    if (cartItems) this.setState({ cart: JSON.parse(cartItems) });
  }

  productCard(product, index) {
    const { title, quantity } = product;
    return (
      <div key={ `${title}-${index}` }>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <span>Quantidade: </span>
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <section>
        {cart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cart.map((product, index) => this.productCard(product, index))}
        <Link to="/checkout" data-testid="checkout-products">
          <button type="button">Finalizar Compra</button>
        </Link>
      </section>
    );
  }
}

export default Cart;
