import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  componentDidUpdate() {
    const { cart } = this.state;
    this.saveCart(cart);
  }

  handleAddToCart = (product, qty = 1) => {
    const { cart } = this.state;
    // se o item já existe, e só alterar o qty, senão cria um novo item no cart
    const updatedCart = cart.find(({ id }) => id === product.id)
      ? cart.map((item) => (
        item.id === product.id ? { ...item, qty: item.qty + qty } : item
      ))
      : [...cart, { ...product, qty }];
    // filtra itens zerados ou negativados
    const filteredCart = updatedCart.filter((item) => item.qty > 0);
    this.saveCart(filteredCart);
    this.fetchCart();
  }

  saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

  fetchCart = () => this.setState(() => (
    { cart: JSON.parse(localStorage.getItem('cart')) }
  ));

  render() {
    const { cart } = this.state;
    const renderHome = (props) => (
      <Home { ...props } handleAddToCart={ this.handleAddToCart } />
    );
    const renderCart = (props) => (
      <Cart { ...props } cart={ cart } handleAddToCart={ this.handleAddToCart } />
    );
    const renderProductDetails = (props) => (
      <ProductDetails { ...props } handleAddToCart={ this.handleAddToCart } />
    );
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ renderHome } />
            <Route path="/Cart" render={ renderCart } />
            <Route
              path="/productDetails/:category/:id"
              render={ renderProductDetails }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
