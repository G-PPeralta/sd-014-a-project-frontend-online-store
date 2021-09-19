import React, { Component } from 'react';

import HomeButton from '../components/HomeButton';
import { getproducts } from '../services/shopCartManag';
import ProductList from '../components/ProductList';

class Cart extends Component {
  constructor(props) {
    super(props);

    document.title = 'Carrinho';
    this.state = {
      offCart: false,
      products: [],
    };

    this.handleQuantityButtonsClick = this.handleQuantityButtonsClick.bind(this);
  }

  componentDidMount() {
    const products = getproducts();
    this.resultCart(products);
  }

  handleQuantityButtonsClick(name, product) {
    const { products } = this.state;
    let expectedProduct = products.find((item) => item.id === product.id);
    const filteredProducts = products.filter((item) => item.id !== product.id);
    switch (name) {
    case 'increase':
      expectedProduct.counter += 1;
      break;
    case 'decrease':
      expectedProduct.counter -= 1;
      break;
    default:
      expectedProduct = null;
      break;
    }
    let newProducts = [];
    if (expectedProduct === null) newProducts = [...filteredProducts];
    else newProducts = [...filteredProducts, expectedProduct];
    this.setState({
      products: newProducts,
    });
  }

  resultCart(products) {
    this.setState({ products });
  }

  render() {
    const { products, offCart } = this.state;
    if (products.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>);
    }
    return (
      <main>
        <HomeButton />
        <ProductList
          handleQuantityButtonsClick={ this.handleQuantityButtonsClick }
          products={ products }
          offCart={ offCart }
        />
      </main>
    );
  }
}

export default Cart;
