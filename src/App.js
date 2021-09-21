import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/product-detail/:id" component={ ProductDetail } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
