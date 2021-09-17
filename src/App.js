import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';

import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />
          <Route path="/shopping-cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
