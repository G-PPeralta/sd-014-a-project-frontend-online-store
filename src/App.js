import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/cart" component={ Cart } />
      <Route
        exact
        path="/product/:id"
        render={ (props) => <ProductDetails { ...props } /> }
      />
    </BrowserRouter>
  );
}

export default App;
