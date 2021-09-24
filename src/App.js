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
    // TODO: Rodar essa função ao atualizar o cart no localStorage também
    this.fetchCart();
  }

  handleAddtoCart = async (category, id) => {
    await addToCart(category, id);
    this.fetchCart();
  }

  fetchCart = async () => {
    console.log('função', getCartItems);
    const cart = await getCartItems();
    console.log('cart no fetchCart', cart);
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    console.log('state do app', this.state);
    // const renderHome = (props) => (
    //   <Home { ...props } handleAddToCart={ this.handleAddtoCart } />
    // );
    // const renderCart = (props) => {
    //   console.log('cart na callback no app', cart);
    //   return <Cart { ...props } cart={ cart } />;
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (<Home
                { ...props }
                handleAddToCart={ this.handleAddtoCart }
              />) }
            />
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
