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
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const { cartItems } = localStorage;
    if (cartItems) this.setState({ cart: JSON.parse(cartItems) });
  }

  removeAllItems() {
    localStorage.cartItems = '[]';
    this.getCartItems();
  }

  removeItem({ target: { id } }) {
    const cartList = JSON.parse(localStorage.cartItems);
    const cartListUpdate = cartList.reduce((acc, cur) => (
      cur.id === id ? acc : [...acc, cur]), []);
    localStorage.cartItems = JSON.stringify(cartListUpdate);
    this.getCartItems();
  }

  changeQuantity({ target: { name, id } }) {
    const cartList = JSON.parse(localStorage.cartItems);
    const cartListUpdate = cartList.map((product) => {
      if (product.id === id) {
        product.quantity = name === 'add-item' ? product.quantity + 1
          : product.quantity - 1;
      }
      return product;
    });
    localStorage.cartItems = JSON.stringify(cartListUpdate);
    this.getCartItems();
  }

  productCard(product, index) {
    const { id, title, quantity, available_quantity: avaliable } = product;
    return (
      <div key={ `${title}-${index}` }>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <input
          id={ id }
          type="button"
          value="-"
          name="remove-item"
          onClick={ this.changeQuantity }
          data-testid="product-decrease-quantity"
          disabled={ quantity === 0 }
        />
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <input
          id={ id }
          type="button"
          value="+"
          name="add-item"
          onClick={ this.changeQuantity }
          data-testid="product-increase-quantity"
          disabled={ avaliable <= quantity }
        />
        <input
          id={ id }
          type="button"
          value="X"
          onClick={ this.removeItem }
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
        <input type="button" onClick={ this.removeAllItems } value="Esvaziar Carrinho" />
      </section>
    );
  }
}

export default Cart;
