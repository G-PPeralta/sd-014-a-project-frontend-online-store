import React, { Component } from "react";

class Checkout extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <div>
          {/* Adicionar listagem de produtos aqui */}
          <label htmlFor="client-name">
            Nome Completo
            <input
              type="text"
              name=""
              id="client-name"
              data-testid="checkout-fullname"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              data-testid="checkout-email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cpf">
            CPF
            <input
              type="text"
              name="cpf"
              id="cpf"
              data-testid="checkout-cpf"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="phone">
            Telefone
            <input
              type="text"
              name="phone"
              id="phone"
              data-testid="checkout-phone"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cep">
            CEP
            <input
              type="text"
              name="cep"
              id="cep"
              data-testid="checkout-cep"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="address">
            Endereço
            <input
              type="text"
              name="address"
              id="address"
              data-testid="checkout-address"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          
        </div>
      </>
    );
  }
}

export default Checkout;
