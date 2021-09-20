import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartList from './Page/CartList';
import HomePage from './Page/HomePage';
import ProductDetails from './Page/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/cart" component={ CartList } />
        <Route exact path="/product-details/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
