import React from 'react';
import '../services/localstorage';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cart: [],
    };
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
    const cart = localStorage.getObj('products');
    console.log(cart);
  }

  render() {
    return (
      <h2>Checkout</h2>
    );
  }
}

export default Checkout;
