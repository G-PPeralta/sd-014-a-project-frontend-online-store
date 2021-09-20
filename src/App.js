import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import Card from './components/Card';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/cart" component={ Card } />
        <Route exact path="/product/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
