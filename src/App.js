import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { FiShoppingCart } from 'react-icons/fi';
import Cart from './components/Cart';
import './productStyles.css';
import Home from './components/Home';
import DetalhesProduto from './components/DetalhesProduto';
import VolumeCarrinho from './components/VolumeCarrinho';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.cartSetState();
  }

  cartSetState = () => {
    if (localStorage.getItem('Cart')) {
      let local = localStorage.getItem('Cart');
      local = JSON.parse(local);
      this.setState({
        cartItems: [...local],
      });
    }
  }

  deleteCart = () => {
    localStorage.removeItem('Cart');
    this.setState({
      cartItems: undefined,
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <FiShoppingCart color="green" />
            <VolumeCarrinho cartItems={ cartItems } />
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home { ...props } cartSetState={ this.cartSetState } />
              ) }
            />
            <Route
              path="/shopping-cart"
              render={ (props) => (
                <Cart
                  { ...props }
                  cartItems={ cartItems }
                  cartSetState={ this.cartSetState }
                  deleteCart={ this.deleteCart }
                />
              ) }
            />
            <Route path="/detalhesproduto/:id" component={ DetalhesProduto } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
