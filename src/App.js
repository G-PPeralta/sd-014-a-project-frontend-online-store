import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { FiShoppingCart } from 'react-icons/fi';
import Cart from './components/Cart';
import './productStyles.css';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <FiShoppingCart color="green" />
        </Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
