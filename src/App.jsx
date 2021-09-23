import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';
import FinalizePurchase from './pages/FinalizePurchase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/product/:id" component={ Product } />
          <Route path="/finalize-purchase" component={ FinalizePurchase } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
