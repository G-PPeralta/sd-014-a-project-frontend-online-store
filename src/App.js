import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { addToCart, getCartItems } from './services/cart';

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

  handleAddtoCart = async (category, id) => {
    await addToCart(category, id);
    this.fetchCart();
  }

  fetchCart = async () => {
    const cart = await getCartItems();
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    const renderHome = (props) => (
      <Home { ...props } handleAddToCart={ this.handleAddtoCart } />
    );
    const renderCart = (props) => <Cart { ...props } cart={ cart } />;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ renderHome } />
            <Route path="/Cart" render={ renderCart } />
            <Route
              path="/productDetails/:category/:id"
              component={ ProductDetails }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
