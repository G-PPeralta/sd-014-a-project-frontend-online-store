import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartList from './Page/CartList';
import HomePage from './Page/HomePage';
import ProductDetails from './Page/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
    };
  }

  addCart = (event, nome, preco, quantidade = 1) => {
    event.preventDefault();
    const { cart } = this.state;
    if (cart[nome]) {
      this.setState({
        cart: {
          ...cart,
          [nome]: [cart[nome][0] + quantidade, preco],
        },
      });
    } else {
      this.setState({
        cart: {
          ...cart,
          [nome]: [1, preco],
        },
      });
    }
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<HomePage
              cartList={ cart }
              addCart={ this.addCart }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<CartList
              cartList={ cart }
              addCart={ this.addCart }
            />) }
          />
          <Route
            exact
            path="/product-details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addCart={ this.addCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
