import React, { Component } from 'react';
import ShoppingIcon from '../components/ShoppingIcon';
//import { getCartItems } from '../services/addFunctions';
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

  // componentDidMount() {
  //   const storage = getCartItems();
  //   localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cartProducts));
  //   this.setCartItems(storage);
  // }

  componentDidMount() {
    this.loadLocalStorage();
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
    const { loading, cartProducts } = this.state;
    if (loading) {
      return <h2>LOADING..</h2>;
    }
    return (
      <div>
        <Link className="return-button" to="/">
          <img
            alt="return-button"
            src="https://img.icons8.com/ios/50/000000/left2.png"
          />
        </Link>
        <div className="shopping-cart-field">
          <img
            alt="shopping-cart"
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          />
          <h2>Carrinho de Compras</h2>
        </div>
        <main className="cart-product-list">
          {cartProducts.length > 0 ? this.showProducts() : this.showEmptyCart()}
        </main>
      </div>
    );
  }
}

