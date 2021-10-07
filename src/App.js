import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header';
import Switchers from './Switchers';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: '',
    }
  }

  render() {
    const { items } = this.state;
    return (
      <BrowserRouter>
        <Header cartItems=""/>
        <Switchers />
      </BrowserRouter>
    );
  }
}

export default App;
