import React from 'react';
import '../styles/checkout.css';
import Button from 'react-bootstrap/Button';

class Checkout extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form className="checkout-info">
          Dados pessoais:
          <label htmlFor="name">
            Nome Completo:
            <input type="text" name="name" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" data-testid="checkout-email" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input type="text" name="cpf" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="telefone">
            Telefone:
            <input type="text" name="telefone" data-testid="checkout-phone" />
          </label>
          <label htmlFor="address">
            Endereço:
            <input type="text" name="address" data-testid="checkout-address" />
          </label>
          <label htmlFor="cep">
            CEP:
            <input type="text" name="cep" data-testid="checkout-cep" />
          </label>
        </form>
        <Button as="input" type="submit" value="Submit" variant="success" />
        {' '}
      </div>
    );
  }
}

export default Checkout;
