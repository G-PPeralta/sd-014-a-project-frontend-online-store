import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import main from './pages/main';
import shoppingCart from './pages/shoppingCart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ main } />
          <Route path="/shoppingCart" component={ shoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
