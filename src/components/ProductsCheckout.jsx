import React, { Component } from 'react';
// import CheckoutProduct from './CheckoutProduct';

export default class ProductsCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      // total: 0,
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

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2>Revise seus produtos</h2>
        {products.length > 0 ? (
          this.renderProducts()
        ) : (
          <span>Não possui itens</span>
        )}
      </div>
    );
  }
}
