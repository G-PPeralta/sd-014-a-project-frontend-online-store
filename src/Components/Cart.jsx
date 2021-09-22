import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      totalPrice: 0,
      totalItems: 0,
    };
  }

  componentDidMount() {
    this.getItemsFromStorage();
  }

  getItemsFromStorage = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    this.setState({ productList: cartItems }, () => {
      if (cartItems) {
        this.calculateTotalPrice();
        this.totalItemsInCart();
      }
    });
  }

  totalItemsInCart = () => {
    const { productList } = this.state;
    const totalItems = productList.reduce((acc, item) => {
      acc += item.quantity;
      return acc;
    }, 0);
    this.setState({ totalItems });
  }

  calculateTotalPrice = () => {
    const { productList } = this.state;
    const totalPrice = productList.reduce((ac, e) => {
      ac += (e.productObj.price * e.quantity);
      return ac;
    }, 0);

    this.setState({ totalPrice });
  }

  addItem = ({ target }, item) => {
    const product = item.productObj;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i <= currentCart.length; i += 1) {
      if (currentCart[i].productId === product.id) {
        if (currentCart[i].quantity === product.available_quantity) {
          target.disabled = true;
          break;
        }
        currentCart[i].quantity += 1;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.getItemsFromStorage();
  }

  removeItem = (item) => {
    const product = item.productObj;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i <= currentCart.length; i += 1) {
      if (currentCart[i].productId === product.id) {
        if (currentCart[i].quantity === 1) {
          currentCart.splice(i, 1);
          break;
        } else {
          currentCart[i].quantity -= 1;
          break;
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.getItemsFromStorage();
  }

  itemsToRenderMap = () => {
    const { productList, totalPrice, totalItems } = this.state;
    const cartDetails = (
      <div>
        {productList.map((item) => (
          (
            <CartItems
              key={ item.productObj.id }
              price={ item.productObj.price }
              id={ item.productObj.id }
              title={ item.productObj.title }
              thumbnail={ item.productObj.thumbnail }
              quantity={ item.quantity }
              maxQuant={ item.productObj.available_quantity }
              addItem={ this.addItem }
              removeItem={ this.removeItem }
              item={ item }
            />
          )
        ))}
        <p>
          Total:
          { totalPrice }
        </p>
        <p data-testid="shopping-cart-size">
          Itens no carrinho:
          { totalItems }
        </p>
        <Link to="/checkout" data-testid="checkout-products">Checkout</Link>
      </div>
    );

    return cartDetails;
  }

  render() {
    const { productList } = this.state;
    const empty = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );
    return (
      <div>
        {!productList || productList.length === 0 ? empty : this.itemsToRenderMap()}
      </div>
    );
  }
}
