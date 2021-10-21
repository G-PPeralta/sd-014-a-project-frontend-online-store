import React, { Component } from 'react';
import ShoppingIcon from '../components/ShoppingIcon';
import { getCartItems } from '../services/addFunctions';
import CartCard from '../components/CartCard';

const STORAGE_CART_KEY = 'cart-products';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
      loading: false,
    };

    this.showProducts = this.showProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.changeProductQuantity = this.changeProductQuantity.bind(this);
  }

  componentDidMount() {
    const storage = getCartItems();
    localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cartProducts));
    this.setCartItems(storage);
  }

  componentDidUpdate() {
    const { cartProducts } = this.state;
    localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cartProducts));
  }
  // setCartItems = (storage) => {
  //   this.setState({ items: storage });
  // }

  loadLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem(STORAGE_CART_KEY));
    if (savedCart) {
      this.setState({ cartProducts: savedCart });
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <ShoppingIcon />
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        { items.map((item) => <CartCard key={ item.id } item={ item } />)}
      </div>
    );
  }
}
