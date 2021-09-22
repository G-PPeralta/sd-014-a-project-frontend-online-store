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

  componentDidUpdate() {
    const { cartProducts } = this.state;
    localStorage.setItem('cart-products', JSON.stringify(cartProducts));
  }

  loadLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart-products'));
    if (savedCart) {
      this.setState({ cartProducts: savedCart });
    }
  }

  removeProduct(productToRemoveId) {
    console.log('Removendo produto: ', productToRemoveId);
    const { cartProducts } = this.state;
    const newCart = cartProducts.filter(
      (product) => product.id !== productToRemoveId,
    );
    console.log(newCart);
    this.setState({
      cartProducts: newCart,
    });
  }

  changeProductQuantity(product, sign) {
    const { cartProducts } = this.state;

    if (sign === '+') {
      const newCart = cartProducts.map((p) => {
        if (p.id === product.id) {
          p.productQty += 1;
        }
        return p;
      });

      this.setState({
        cartProducts: newCart,
      });
    } else {
      const newCart = cartProducts.map((p) => {
        if (p.id === product.id && p.productQty >= 1) {
          p.productQty -= 1;
        }
        return p;
      });
      const newCartWithoutZero = newCart.filter((p) => p.productQty > 0);

      this.setState({
        cartProducts: newCartWithoutZero,
      });
    }
  }

  calculatePrice() {
    const { cartProducts } = this.state;
    let totalPrice = 0;
    cartProducts.forEach((p) => {
      totalPrice += p.price;
    });
    return totalPrice;
  }

  showProducts() {
    const { cartProducts } = this.state;
    return (
      <section>
        {cartProducts.map((product) => (
          <CartProduct
            key={ product.id }
            product={ product }
            removeProduct={ this.removeProduct }
            changeProductQuantity={ this.changeProductQuantity }
          />
        ))}
        <h2>
          {`Valor Total da Compra: R$ ${this.calculatePrice().toFixed(2)}`}
        </h2>
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
          {cartProducts.length > 0 ? this.showProducts() : this.showEmptyCart()}
        </main>
      </div>
    );
  }
}
