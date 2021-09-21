import React, { Component } from 'react';

import GoToHomeButton from '../components/GoToHomeButton';
import GoToPaymentButton from '../components/GoToPaymentButton';
import { getProducts } from '../services/shopCartManag';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Message from '../components/Message';

class Cart extends Component {
  constructor(props) {
    super(props);

    document.title = 'Carrinho';
    this.state = {
      inHome: false,
      products: [],
    };

    this.handleQuantityButtonsClick = this.handleQuantityButtonsClick.bind(this);
  }

  componentDidMount() {
    const products = getProducts();
    this.resultCart(products);
  }

  handleQuantityButtonsClick(name, product) {
    const { products } = this.state;
    const expectedProductIndex = products.findIndex((item) => item.id === product.id);
    switch (name) {
    case 'increase':
      products[expectedProductIndex].counter += 1;
      break;
    case 'decrease':
      products[expectedProductIndex].counter -= 1;
      break;
    default:
      products[expectedProductIndex] = null;
      break;
    }
    let newProducts = [];
    if (products[expectedProductIndex] === null) {
      newProducts = products.filter((item) => item !== null);
    } else newProducts = products;
    this.setState({
      products: newProducts,
    });
  }

  resultCart(products) {
    this.setState({ products });
  }

  render() {
    const { products, inHome } = this.state;
    return (
      <div
        style={ { backgroundColor: '#f9f9f9' } }
        className="d-flex flex-column w-100"
      >
        <Header>
          <h1 className="text-white">Carrinho</h1>
          <div>
            <GoToHomeButton />
            <GoToPaymentButton />
          </div>
        </Header>
        <main
          className="d-flex my-3 m-auto"
          style={ { width: '85%' } }
        >
          {products.length === 0 && <Message
            message="Seu carrinho está vazio"
            dataTestId="shopping-cart-empty-message"
          />}
          <ProductList
            handleQuantityButtonsClick={ this.handleQuantityButtonsClick }
            products={ products }
            inHome={ inHome }
          />
        </main>
      </div>
    );
  }
}

export default Cart;
