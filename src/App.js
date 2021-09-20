import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import main from './pages/main';
import shoppingCart from './pages/shoppingCart';
import details from './pages/details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ main } />
          <Route path="/shoppingCart" component={ shoppingCart } />
          <Route path="/details" component={ details } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
