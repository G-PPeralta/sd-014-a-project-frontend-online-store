import React from 'react';
import Estados from './Estados';

class InfoUser extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Nome Completo"
          data-testid="checkout-fullname"
        />
        <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
        <input type="email" placeholder="Email" data-testid="checkout-email" />
        <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
        <input type="text" placeholder="CEP" data-testid="checkout-cep" />
        <input type="text" placeholder="Endereço" data-testid="checkout-address" />
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Cidade" />
        <Estados />
      </form>
    );
  }
}

export default InfoUser;
