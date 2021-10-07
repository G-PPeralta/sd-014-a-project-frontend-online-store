import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Finished from './pages/Finished';

class Switchers extends React.Component {
  render() {
    // const { cartItems } = this.props;
    return (
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/cart" render={ (props) => <Cart { ...props } /> } />
        <Route path="/category/:id" component={ (props) => <Category { ...props } /> } />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route exact path="/checkout" component={ Checkout } />
        <Route path="/checkout/:name" component={ Finished } />
      </Switch>
    );
  }
}

export default Switchers;
