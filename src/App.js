import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header';
import Switchers from './Switchers';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: '',
    }
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Header cartItems={cartItems}/>
        <Switchers cartItems={cartItems}/>
      </BrowserRouter>
    );
  }
}

export default App;
