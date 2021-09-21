import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../pages/Search';
import ShoppingCart from '../pages/ShoppingCart';

class Rotas extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route
            data-testid="shopping-cart-empty-message"
            path="/shopping-cart"
            component={ ShoppingCart }
          />
        </Switch>
      </div>
    );
  }
}

export default Rotas;
