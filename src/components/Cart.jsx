import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';

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
    this.updateGlobal = this.updateGlobal.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const { cartItems } = localStorage;
    if (cartItems) this.setState({ cart: JSON.parse(cartItems) });
  }

  removeAllItems(globalChanger) {
    localStorage.cartItems = '[]';
    this.getCartItems();
    this.updateGlobal(globalChanger);
  }

  removeItem({ target: { id } }, globalChanger) {
    const cartList = JSON.parse(localStorage.cartItems);
    const cartListUpdate = cartList.reduce((acc, cur) => (
      cur.id === id ? acc : [...acc, cur]), []);
    localStorage.cartItems = JSON.stringify(cartListUpdate);
    this.getCartItems();
    this.updateGlobal(globalChanger);
  }

  changeQuantity({ target: { name, id } }, globalChanger) {
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
    this.updateGlobal(globalChanger);
  }

  updateGlobal(setCartLength) {
    const { cartItems } = localStorage;
    let result = 0;
    if (cartItems) {
      result = JSON.parse(cartItems).reduce((acc, cur) => (acc + cur.quantity), 0);
    }
    setCartLength(result);
  }

  productCard(product, index, globalChanger) {
    const { id, title, quantity, available_quantity: avaliable } = product;
    return (

      <div key={ `${title}-${index}` }>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <input
          id={ id }
          type="button"
          value="-"
          name="remove-item"
          onClick={ (event) => {
            this.changeQuantity(event, globalChanger);
          } }
          data-testid="product-decrease-quantity"
          disabled={ quantity === 0 }
        />
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <input
          id={ id }
          type="button"
          value="+"
          name="add-item"
          onClick={ (event) => {
            this.changeQuantity(event, globalChanger);
          } }
          data-testid="product-increase-quantity"
          disabled={ avaliable <= quantity }
        />
        <input
          id={ id }
          type="button"
          value="X"
          onClick={ (event) => {
            this.removeItem(event, globalChanger);
          } }
        />
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <Context.Consumer>
        {({ setCartLength }) => (
          <section>
            {cart.length === 0
              ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
              : cart.map((product, index) => (
                this.productCard(product, index, setCartLength)))}
            <Link to="/checkout" data-testid="checkout-products">
              <button type="button">Finalizar Compra</button>
            </Link>
            <input
              type="button"
              onClick={ () => {
                this.removeAllItems(setCartLength);
              } }
              value="Esvaziar Carrinho"
            />
          </section>
        ) }
      </Context.Consumer>
    );
  }
}

export default Cart;
