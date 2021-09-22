import React, { Component } from 'react';
import '../styles/ProductsCheckout.css';

export default class ProductsCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('cart-products'));
    if (products) {
      this.setState({ products });
    }
  };

  renderProducts = () => {
    const { products } = this.state;

    return products.map(({ id, price, productQty, thumbnail, title }) => (
      <div className="checkout-product" key={ id }>
        <img src={ thumbnail } alt={ title } />
        <span>{title}</span>
        <span>{price}</span>
        <span>{productQty}</span>
      </div>
    ));
  };

  renderTotalPrice = () => {
    const { products } = this.state;

    return (
      <div className="checkout-total">
        <span>Total:</span>
        {products.length > 0 ? (
          <span>
            R$
            {' '}
            {products.reduce(
              (acc, { price, productQty }) => acc + price * productQty,
              0,
            )}
          </span>
        ) : (
          <span>R$ 0,00</span>
        )}
      </div>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <div className="checkout-container">
        <h2>Revise seus produtos</h2>
        {products.length > 0 ? (
          this.renderProducts()
        ) : (
          <span>Não possui itens</span>
        )}
        {this.renderTotalPrice()}
      </div>
    );
  }
}
