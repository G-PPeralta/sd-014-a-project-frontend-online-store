import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cart from './components/Cart';
import Home from './components/Home';
import Item from './components/Item';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/product/:id" component={ Item } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
