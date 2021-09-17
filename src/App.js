import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartList from './Pages/CartList';
import HomePage from './Pages/HomePage';

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
