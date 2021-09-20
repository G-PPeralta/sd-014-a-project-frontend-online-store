import React from 'react';
import { Link } from 'react-router-dom';

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

  addItem = ({ target }) => {
    const { id } = target;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i <= currentCart.length; i += 1) {
      if (currentCart[i].productId && currentCart[i].productId === id) {
        currentCart[i].quantity += 1;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.getItemsFromStorage();
  }

  removeItem = ({ target }) => {
    const { id } = target;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i <= currentCart.length; i += 1) {
      if (currentCart[i].productId && currentCart[i].productId === id) {
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
        {productList.map((item, i) => {
          const { price, id, title, thumbnail } = item.productObj;
          const { quantity } = item;
          return (
            <div key={ i }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{title}</p>
              <p data-testid="shopping-cart-product-quantity">
                {quantity}
              </p>
              <p>{price}</p>
              <div>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  name="product-decrease-quantity"
                  id={ id }
                  onClick={ this.removeItem }
                >
                  -
                </button>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  name="product-increase-quantity"
                  id={ id }
                  onClick={ this.addItem }
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
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
