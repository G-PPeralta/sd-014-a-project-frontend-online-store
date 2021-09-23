import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/Cart" component={ Cart } />
            <Route path="/productDetails/:category/:id" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
