import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartList from './components/CartList';
import HomePage from './components/HomePage';

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
