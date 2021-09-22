import React from 'react';
import CartCheckout from '../components/CartCheckout';
import MetodoPagamento from '../components/MetodoPagamento';

class Checkout extends React.Component {
  render() {
    return (
      <main>
        <CartCheckout />
        { /*<ProductsCheckout />
        <InfoPayer /> */ }
        <MetodoPagamento />
      </main>
    )
  }
}

export default Checkout;