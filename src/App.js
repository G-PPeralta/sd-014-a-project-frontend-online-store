import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/product/:category/:title/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
