import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import main from './pages/main';
import products from './pages/products';
import shoppingCart from './pages/shoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ main } />
          <Route exact path="/shoppingCart" component={ shoppingCart } />
          <Route exact path="/products/:CategoriaId/:productId" component={ products } />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
