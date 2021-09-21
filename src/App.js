import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, CartPage } from './pages';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ CartPage } />
          <Route exact path="/" component={ Home } />
          <Route path="/product/:id" component={ ProductDetails } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
