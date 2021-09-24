import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import LeftArrow from '../services/image/LeftArrow.svg';
import BoxOpen from '../services/image/package-box-open.svg';

class Cart extends React.Component {
  constructor() {
    const cartStorage = JSON.parse(localStorage.getItem('carrinho'));
    super();
    this.state = {
      storage: cartStorage,
    };
    this.removeItem = this.removeItem.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.remove = this.remove.bind(this);
    this.productQuantity = this.productQuantity.bind(this);
  }

  addCartItem(product) {
    const { storage } = this.state;
    const findItem = storage.find((cart) => cart.id === product.id);
    if (findItem) {
      const newCart = storage.map((item) => (
        item.id === product.id
          ? { ...findItem, quantity: findItem.quantity + 1 } : item));
      this.setState({
        storage: newCart,
      });
      localStorage.setItem('carrinho', JSON.stringify([...storage]));
    } else {
      localStorage
        .setItem('carrinho', JSON.stringify([...storage, { ...product, quantity: 1 }]));
    }
  }

  remove(product) {
    const { storage } = this.state;
    const findItem = storage.find((item) => item.id === product.id);
    if (findItem !== undefined && findItem.quantity === 1) {
      const newCart = storage.filter((item) => item.id === product.id);
      localStorage.setItem('carrinho', JSON.stringify([...newCart]));
    } else {
      const newCart = storage.map((item) => (
        item.id === product.id
          ? { ...findItem, quantity: findItem.quantity - 1 } : item));
      this.setState({
        storage: newCart,
      });
      localStorage.setItem('carrinho', JSON.stringify([...storage]));
    }
  }

  removeItem(product) {
    const { storage } = this.state;
    const findItem = storage.filter((cart) => cart.id !== product.id);
    this.setState({
      storage: findItem,
    });
    localStorage.setItem('carrinho', JSON.stringify(findItem));
  }

  productQuantity() {
    const { storage } = this.state;
    const quant = storage.reduce((quantidade, soma) => quantidade + soma.quantity, 0);
    return quant;
  }

  render() {
    const { storage } = this.state;
    return (
      <section>
        <Link to="/">
          <img src={ LeftArrow } alt="arrow" />
        </Link>
        <ShoppingCartIcon />
        <img src={ BoxOpen } alt="Box Open Empty" />
        {storage.length === 0
          && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <ul>
          {storage.map((product) => (
            <div key={ product.id } data-testid="shopping-cart-product-name">
              <img src={ product.thumbnail } alt={ product.title } width="150" />
              <p>{ product.title }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.remove(product) }
              >
                -
              </button>
              <h5 data-testid="shopping-cart-product-quantity">{ product.quantity }</h5>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.addCartItem(product) }
              >
                +
              </button>
              <div>
                <button
                  type="button"
                  onClick={ () => this.removeItem(product) }
                >
                  X
                </button>
              </div>
              <hr />
            </div>
          ))}
        </ul>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          Total de produtos:
          { this.productQuantity() }
        </p>
      </section>
    );
  }
}

export default Cart;
