import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import '../styles/ShoppingCart.css';

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
    this.loadLocalStorage();
  }

  loadLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart-products'));
    if (savedCart) {
      savedCart.forEach((product) => {
        if (!product.quantity) {
          product.quantity = 1;
        }
      });
      this.setState({ cartProducts: savedCart });
    }
  }

  removeProduct(id) {
    const { cartProducts } = this.state;
    const filtered = cartProducts.filter((prod) => prod.id !== id);
    this.setState({
      cartProducts: filtered,
    });
  }

  changeProductQuantity(product, value) {
    const { cartProducts } = this.state;
    const index = cartProducts.indexOf(product);
    if ((cartProducts[index].quantity + value) > 0) {
      cartProducts[index].quantity += value;
      this.setState({
        cartProducts,
      });
      // localStorage.setItem('shoppingCart', JSON.stringify(cartProducts));
    }
  }

  calculatePrice() {
    const { cartProducts } = this.state;
    let totalPrice = 0;
    cartProducts.forEach((p) => { totalPrice += p.price; });
    return totalPrice;
  }

  showProducts() {
    const { cartProducts } = this.state;
    return (
      <section>
        { cartProducts.map((product) => (
          <CartProduct
            key={ product.id }
            product={ product }
            removeProduct={ this.removeProduct }
            changeProductQuantity={ this.changeProductQuantity }
          />
        ))}
        <h2>{ `Valor Total da Compra: R$ ${this.calculatePrice().toFixed(2)}` }</h2>
        <button type="button">Finalizar Compra</button>
      </section>
    );
  }

  showEmptyCart() {
    return (
      <section>
        <img
          alt="empty-box"
          src="https://img.icons8.com/ios/100/000000/empty-box.png"
        />
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      </section>
    );
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
          { cartProducts.length > 0 ? this.showProducts() : this.showEmptyCart() }
        </main>
      </div>
    );
  }
}
