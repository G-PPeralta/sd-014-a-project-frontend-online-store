import React from 'react';
import CartCheckout from '../components/CartCheckout';
import InfoComprador from '../components/InfoComprador';
import MetodoPagamento from '../components/MetodoPagamento';

class Checkout extends React.Component {
  render() {
    return (
      <main>
        <CartCheckout />
        <InfoComprador />
        <MetodoPagamento />
      </main>
    )
  }
}

export default Checkout;