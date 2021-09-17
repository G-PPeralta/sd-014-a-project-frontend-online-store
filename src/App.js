import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import * as api from './services/api';

class App extends React.Component {
  render() {
    api.getCategories()
      .then((r) => api.getProductsFromCategoryAndQuery(r[0].id, 'volante')
        .then((v) => console.log(v.results)));
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
