import React from 'react';
import PropTypes from 'prop-types';

export default class PurchaseForm extends React.Component {
  render() {
    const {
      email,
      fullname,
      phone,
      cep,
      cpf,
      address,
      handleInput,
      handleButton,
      handlePayment,
    } = this.props;
    return (
      <form>
        <input
          type="text"
          data-testid="checkout-fullname"
          name="fullname"
          placeholder="Nome Completo"
          value={ fullname }
          onChange={ handleInput }
        />
        <input
          type="email"
          data-testid="checkout-email"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ handleInput }
        />
        <input
          type="text"
          data-testid="checkout-cpf"
          name="cpf"
          placeholder="CPF"
          value={ cpf }
          onChange={ handleInput }
        />
        <input
          type="text"
          data-testid="checkout-phone"
          name="phone"
          placeholder="Telefone"
          value={ phone }
          onChange={ handleInput }
        />
        <input
          type="text"
          data-testid="checkout-cep"
          name="cep"
          placeholder="CEP"
          value={ cep }
          onChange={ handleInput }
        />
        <input
          type="text"
          data-testid="checkout-address"
          name="address"
          placeholder="Endereço"
          value={ address }
          onChange={ handleInput }
        />
        <input
          type="radio"
          name="method"
          value="debit"
          onChange={ handlePayment }
        />
        <input
          type="radio"
          name="method"
          value="credit"
          onChange={ handlePayment }
        />
        <input
          type="radio"
          name="method"
          value="boleto"
          onChange={ handlePayment }
        />
        <button
          type="button"
          onClick={ handleButton }
        >
          Finalizar
        </button>
      </form>
    );
  }
}

PurchaseForm.propTypes = {
  email: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
  handlePayment: PropTypes.func.isRequired,
};
