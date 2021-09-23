import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getCartItems } from './services/cart';

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
    // TODO: Rodar essa função ao atualizar o cart no localStorage também
    this.fetchCart();
  }

  fetchCart = async () => {
    const cart = await getCartItems();
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route
              path="/Cart"
              render={ (props) => <Cart { ...props } cart={ cart } /> }
            />
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
