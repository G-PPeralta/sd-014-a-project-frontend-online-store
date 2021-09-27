import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class InputsCheckout extends React.Component {
  render() {
    const { nome, email, cpf, cep, endereco, telefone, handleChange } = this.props;
    return (
      <div>
        <input
          data-testid="checkout-fullname"
          type="text"
          name="nome"
          value={ nome }
          onChange={ handleChange }
        />
        Nome Completo
        <input
          data-testid="checkout-email"
          type="text"
          name="email"
          value={ email }
          onChange={ handleChange }
        />
        Email
        <input
          data-testid="checkout-cpf"
          type="text"
          name="cpf"
          value={ cpf }
          onChange={ handleChange }
        />
        CPF
        <input
          data-testid="checkout-cep"
          type="text"
          name="cep"
          value={ cep }
          onChange={ handleChange }
        />
        CEP
        <input
          data-testid="checkout-address"
          type="text"
          name="endereco"
          value={ endereco }
          onChange={ handleChange }
        />
        Endereço
        <input
          data-testid="checkout-phone"
          type="text"
          name="telefone"
          value={ telefone }
          onChange={ handleChange }
        />
        Telefone
        <Link to="/">
          <button
            type="button"
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

InputsCheckout.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default InputsCheckout;
