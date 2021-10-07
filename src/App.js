import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Card from './pages/Card';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/card" component={ Card } />
            <Route path="/details/:id" component={ ProductDetails } />
            <Route path="/checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
