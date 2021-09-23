import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class BuyerInfos extends Component {
  render() {
    const {
      props: { buyer, onHandleChange },
    } = this;
    return (
      <form>
        <Input
          dtId="checkout-fullname"
          type="text"
          idName="fullName"
          text="Nome Completo"
          value={ buyer.fullName }
          onChange={ onHandleChange }
        />
        <Input
          dtId="checkout-email"
          type="email"
          idName="email"
          text="Email"
          value={ buyer.email }
          onChange={ onHandleChange }
        />
        <Input
          dtId="checkout-cpf"
          type="text"
          idName="cpf"
          text="CPF"
          value={ buyer.cpf }
          onChange={ onHandleChange }
        />
        <Input
          dtId="checkout-phone"
          type="text"
          idName="phone"
          text="Telefone"
          value={ buyer.phone }
          onChange={ onHandleChange }
        />
        <Input
          dtId="checkout-cep"
          type="text"
          idName="cep"
          text="CEP"
          value={ buyer.cep }
          onChange={ onHandleChange }
        />
        <Input
          dtId="checkout-address"
          type="text"
          idName="adress"
          text="Endereço"
          value={ buyer.adress }
          onChange={ onHandleChange }
        />
      </form>
    );
  }
}

BuyerInfos.propTypes = {
  buyer: PropTypes.shape({
    fullName: PropTypes.string,
    cpf: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    cep: PropTypes.string,
    adress: PropTypes.string,
  }).isRequired,
  onHandleChange: PropTypes.func.isRequired,
};

export default BuyerInfos;
