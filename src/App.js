import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route
          path="/ProductDetails/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />

        <Route exact path="/checkout" component={ Checkout } />
      </BrowserRouter>
    );
  }
}

export default App;
