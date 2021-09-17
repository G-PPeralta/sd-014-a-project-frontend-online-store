import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartList from './Page/CartList';
import HomePage from './Page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/cart" component={ CartList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
