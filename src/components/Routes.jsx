import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Search from '../pages/Search';
import ProductDetail from '../pages/ProductDetail';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route exact path="/cart" component={ Cart } />
          <Route
            exact
            path="/:productId/:title/:price"
            render={ (props) => <ProductDetail { ...props } /> }
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
