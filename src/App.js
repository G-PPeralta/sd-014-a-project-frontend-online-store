import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/mycart" component={ MyCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
