import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ Home } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
