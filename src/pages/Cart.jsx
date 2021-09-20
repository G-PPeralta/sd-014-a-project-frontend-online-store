import React, { Component } from 'react';

import HomeButton from '../components/HomeButton';
import { getproducts } from '../services/shopCartManag';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Message from '../components/Message';

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
    return (
      <main>
        <Header>
          <h1 className="text-white">Carrinho</h1>
          <HomeButton />
        </Header>
        {products.length === 0 && <Message
          message="Seu carrinho está vazio"
          dataTestId="shopping-cart-empty-message"
        />}
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
