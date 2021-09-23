import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from './Category';
import Search from '../pages/Search';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

class Rotas extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={ Search }
          />
          <Route
            data-testid="shopping-cart-empty-message"
            path="/shopping-cart"
            component={ ShoppingCart }
          />
          <Route
            exact
            path="/:categoryID"
            render={ ({ match }) => <Category match={ match } /> }
          />
          <Route
            exact
            path="/product/:itemID"
            render={ ({ match, location }) => (
              <ProductDetails
                match={ match }
                location={ location }
              />
            ) }
          />
        </Switch>
      </div>
    );
  }
}

export default Rotas;
