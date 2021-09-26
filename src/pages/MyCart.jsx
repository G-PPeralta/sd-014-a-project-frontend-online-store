import React from 'react';
import { Link } from 'react-router-dom';
import * as cart from '../services/cart';

class MyCart extends React.Component {
  constructor() {
    super();

    this.state = {
      inCart: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const productsInCart = cart.readProductsInCart();
    this.setState({ inCart: productsInCart });
  }

  emptyCartMessage = () => 'Seu carrinho está vazio';

  renderCart = () => {
    const { inCart } = this.state;

    return inCart.map(({ product, quant }) => (
      <div key={ product.id }>
        <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
        <h3 data-testid="shopping-cart-product-quantity">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => {
              const item = { product, quant: 1 };
              cart.decreaseQuant(item);
              this.setState({
                inCart: cart.readProductsInCart(),
              });
            } }
          >
            -
          </button>
          { quant }
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => {
              const item = { product, quant: 1 };
              cart.increaseQuant(item);
              this.setState({
                inCart: cart.readProductsInCart(),
              });
            } }
            disabled={ quant >= product.available_quantity }
          >
            +
          </button>
        </h3>
      </div>
    ));
  }

  render() {
    const { inCart } = this.state;

    return (
      <main>
        <h2 data-testid="shopping-cart-empty-message">
          { inCart.length < 1 ? this.emptyCartMessage() : this.renderCart() }
          <p>{ `Total: R$${cart.getTotal()}` }</p>
        </h2>
        <Link to={ { pathname: '/checkout', state: inCart } }>
          <button
            type="button"
            data-testid="checkout-products"
          >
            Finalizar compra
          </button>
        </Link>
      </main>
    );
  }
}

export default MyCart;
