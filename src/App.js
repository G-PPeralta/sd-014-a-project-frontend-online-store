import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductPage from './Components/ProductPage';
import Purchase from './Components/Purchase';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route
          exact
          path="/product/:id"
          render={ (props) => <ProductPage { ...props } /> }
        />
        <Route exact path="/checkout" component={ Purchase } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
