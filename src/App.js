import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProduct: [],
    };
  }

  takeCartProduct = (product) => {
    this.setState((previousState) => ({
      cartProduct: [...previousState.cartProduct, product],
    }));
  }

  handleCleanCart = () => {
    this.setState({ cartProduct: [],
    });
  }

  render() {
    const { cartProduct } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home { ...props } takeCartProduct={ this.takeCartProduct } />) }
            />
            <Route
              path="/ShoppingCart"
              render={ (props) => (
                <ShoppingCart { ...props } cartProduct={ cartProduct } />) }
            />
            <Route
              path="/product/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  takeCartProduct={ this.takeCartProduct }
                />) }
            />
            <Route
              path="/Checkout"
              render={ (props) => (
                <Checkout { ...props } handleCleanCart={ this.handleCleanCart } />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
