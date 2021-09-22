import React from 'react';
import * as cart from '../services/cart';

class MyCart extends React.Component {
  constructor() {
    super();

    this.state = {
      // inCart: [],
    };
  }

  componentDidMount() {
    cart.rasterizeCart();
    // this.getProducts();
    this.renderCart();
    // console.log(this.state.inCart);
  }

  // getProducts = () => {
  //   const inCart = cart.readProductsInCart();
  //   this.setState({ inCart });
  // }

  handleQtyClick = ({ target }) => {
    const { innerText, value } = target;
    const myItem = cart.readProductsInCart().find((item) => value === item.id);
    console.log(myItem);
    // innerText === '+' ? cart.addProductToCart(myItem) : cart.reduceProductInCart(myItem); LINT NÃO GOSTA DE TERNÁRIO
    if (innerText === '+') cart.addProductToCart(myItem);
    else cart.reduceProductInCart(myItem);
    this.renderCart();
  }

  emptyCartMessage = () => 'Seu carrinho está vazio';

  renderCart = () => {
    const inCart = cart.readProductsInCart();

    const renderMyCart = inCart.map((product) => {
      const thisItem = cart.readProductsInCart().find((item) => (
        item.id === product.id
      ));
      product.inMyCart = (!thisItem || thisItem.inMyCart < 1) ? 1 : thisItem.inMyCart;
      return (
        <div key={ product.id }>
          <h5 data-testid="shopping-cart-product-name">{product.title}</h5>
          <section className="itemQuantity">
            <button
              type="button"
              value={ product.id }
              onClick={ this.handleQtyClick }
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">{product.inMyCart}</p>
            <button
              type="button"
              value={ product.id }
              onClick={ this.handleQtyClick }
            >
              +
            </button>
          </section>
          <p>{product.price * product.inMyCart}</p>
        </div>
      );
    });

    return renderMyCart;
  }

  render() {
    // const { inCart } = this.state;
    const inCart = cart.readProductsInCart();

    return (
      <main>
        <h2 data-testid="shopping-cart-empty-message">
          { inCart.length < 1 ? this.emptyCartMessage() : this.renderCart() }
        </h2>
      </main>
    );
  }
}

export default MyCart;
