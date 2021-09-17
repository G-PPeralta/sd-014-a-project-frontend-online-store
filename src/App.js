import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import MyCart from './pages/MyCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/MyCart" component={ MyCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
