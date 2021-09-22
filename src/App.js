import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProduct: [],
    };
  }

  takeCartProduct = (product) => {
    this.setState ((previousState) => ({
      cartProduct: [...previousState.cartProduct, product ],
    }))  
  }

  render() {
    const { cartProduct } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ (props) => <Home { ...props } takeCartProduct={ this.takeCartProduct } /> }  />
            <Route path="/ShoppingCart" render={ (props) => <ShoppingCart { ...props } cartProduct={ cartProduct } /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
