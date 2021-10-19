import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShopCart from './pages/ShopCart';
import CategoryPage from './pages/CategoryPage';
import ProductCard from './pages/ProductCard';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopCart" component={ ShopCart } />
          <Route path="/category/:id" component={ CategoryPage } />
          <Route path="/card/:id/:idCategory" component={ ProductCard } />
          <Route path="/checkout" component={ Checkout } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
