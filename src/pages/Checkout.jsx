import React from 'react';
import PropTypes from 'prop-types';
import * as cart from '../services/cart';

class Checkout extends React.Component {
  render() {
    const { location: { state } } = this.props;
    return (
      <>
        <header><h1> Checkout </h1></header>
        <main>
          { state.map(({ product, quant }) => (
            <div key={ product.id }>
              <p>{ `${product.title} - R$${product.price} - Quantidade: ${quant}` }</p>
            </div>
          )) }
          <div>
            <p>{ `Total: R$${cart.getTotal()}` }</p>
          </div>
          <form>
            <input
              data-testid="checkout-fullname"
              type="text"
            />
            <input
              data-testid="checkout-email"
              type="text"
            />
            <input
              data-testid="checkout-cpf"
              type="text"
            />
            <input
              data-testid="checkout-phone"
              type="text"
            />
            <input
              data-testid="checkout-cep"
              type="text"
            />
            <input
              data-testid="checkout-address"
              type="text"
            />
            <button type="button">Finalizar</button>
          </form>
        </main>
      </>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default Checkout;
