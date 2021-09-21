import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <h4>Revise seus Produtos</h4>
        </div>
        <div>
          <h4>Informações do comprador</h4>
          <form>
            <input
              type="text"
              name="full-name"
              placeholder="Nome Completo"
              size="30"
              data-testid="checkout-fullname"
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              size="30"
              data-testid="checkout-cpf"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              size="30"
              data-testid="checkout-email"
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              size="30"
              data-testid="checkout-phone"
            />
            <input
              type="text"
              name="full-cep"
              placeholder="CEP"
              size="30"
              data-testid="checkout-cep"
            />
            <input
              type="text"
              name="address"
              placeholder="Endereço"
              size="30"
              data-testid="checkout-address"
            />
            <input
              type="text"
              name="address-comp"
              placeholder="Complemento"
              size="30"
            />
            <input
              type="number"
              name="address-number"
              placeholder="Número"
              size="30"
            />
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              size="30"
            />
            <select name="state">
              <option value="minas-gerais">Minas Gerais</option>
              <option value="parana">Paraná</option>
              <option value="rio">Rio de Janeiro</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout;
