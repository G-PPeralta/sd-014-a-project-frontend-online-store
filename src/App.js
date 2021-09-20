import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
//  import * as api from './services/api';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/detalhes/:id" render={ (props) => <Detalhes { ...props } /> } />
            <Route path="/carrinho" component={ Carrinho } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
