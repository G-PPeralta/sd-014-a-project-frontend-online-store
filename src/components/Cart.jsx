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
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const { cartItems } = localStorage;
    if (cartItems) this.setState({ cart: JSON.parse(cartItems) });
  }

  changeQuantity({ target: { value, id } }) {
    const cartList = JSON.parse(localStorage.cartItems);
    const cartListUpdate = cartList.map((product) => {
      if (product.id === id) {
        product.quantity = value === '+' ? product.quantity + 1 : product.quantity - 1;
      }
      return product;
    });
    localStorage.cartItems = JSON.stringify(cartListUpdate);
    this.getCartItems();
  }

  productCard(product, index) {
    const { id, title, quantity } = product;
    return (
      <div key={ `${title}-${index}` }>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <input
          id={ id }
          type="button"
          value="+"
          onClick={ this.changeQuantity }
          data-testid="product-increase-quantity"
        />
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <input
          id={ id }
          type="button"
          value="-"
          onClick={ this.changeQuantity }
          data-testid="product-decrease-quantity"
        />
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
