import React, { Component } from 'react';

class ChekoutForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
          />
          <input data-testid="checkout-email" type="text" placeholder="Email" />
          <input data-testid="checkout-cpf" type="text" placeholder="CPF" />
          <input data-testid="checkout-phone" type="text" placeholder="Phone" />
          <input data-testid="checkout-cep" type="text" placeholder="CEP" />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereco"
          />
        </form>
      </div>
    );
  }
}

export default ChekoutForm;
