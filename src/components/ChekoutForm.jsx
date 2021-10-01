import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ChekoutForm extends Component {
  render() {
    return (
      <div className="checkout-form shadow rounded">
        <h5>Informações do comprador</h5>
        <form>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
            className="form-control"
          />
          <input
            data-testid="checkout-email"
            type="text"
            placeholder="Email"
            className="form-control"
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
            className="form-control"
          />
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Phone"
            className="form-control"
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
            className="form-control"
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereco"
            className="form-control"
          />
        </form>
        <Button className="align-self-center my-3">Comprar</Button>
      </div>
    );
  }
}

export default ChekoutForm;
