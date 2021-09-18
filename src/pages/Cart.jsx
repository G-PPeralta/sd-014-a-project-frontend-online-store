import React, { Component } from 'react';

import HomeButton from '../components/HomeButton';
import { getproducts } from '../services/shopCartManag';
import ProductList from '../components/cart/ProductList';


class Cart extends Component {
  constructor(props) {
    super(props);

    document.title = 'Carrinho';
    this.state = {
      offCart: false,
    };
  }

  resultCart = () => {
    const { offCart } = this.state;
    const products = getproducts();
    if (products.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    } return <ProductList products={ products } offCart={ offCart } />;
  }

  render() {
    return (
      <main>
        <HomeButton />
        { this.resultCart() }
      </main>
    );
  }
}

export default Cart;
