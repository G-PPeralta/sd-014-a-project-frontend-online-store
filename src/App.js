import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route
        path="/product/:id"
        render={ (props) => <ProductDetails { ...props } /> }
      />
    </BrowserRouter>
  );
}

export default App;
