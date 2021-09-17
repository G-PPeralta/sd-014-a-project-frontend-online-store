import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
//  import * as api from './services/api';
import Carrinho from './pages/Carrinho';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/carrinho" component={ Carrinho } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
