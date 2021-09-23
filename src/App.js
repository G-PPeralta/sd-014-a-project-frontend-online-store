import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route path="/productDetails/:id" component={ ProductDetail } />
        <Route path="/cart" component={ Cart } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}
