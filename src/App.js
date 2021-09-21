import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import main from './pages/main';
import ShoppingCart from './pages/shoppingCart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ main } />
            <Route
              path="/shoppingCart"
              render={ () => <ShoppingCart /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
