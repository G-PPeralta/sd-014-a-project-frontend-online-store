import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.loadCart = this.loadCart.bind(this);
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart() {
    this.setState({
      products: JSON.parse(localStorage.getItem('products')),
    });
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        {products.map((product) => (
          <div
            key={ product.id }
          >
            <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
            <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
