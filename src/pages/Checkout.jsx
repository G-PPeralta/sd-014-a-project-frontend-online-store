import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.genericChange = this.genericChange.bind(this);
    this.submitBtn = this.submitBtn.bind(this);
  }

  genericChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  inputGenerator(data, type, name, value) {
    return (
      <input
        data-testid={ data }
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.genericChange }
      />
    );
  }

  submitBtn() {
    this.setState({
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    });
  }

  render() {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,

    } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="fullname">
            Seu nome Completo:
            { this.inputGenerator('checkout-fullname', 'text', 'fullname', fullname) }
          </label>
          <label htmlFor="email">
            email:
            { this.inputGenerator('checkout-email', 'email', 'email', email) }
          </label>
          <label htmlFor="cpf">
            CPF:
            { this.inputGenerator('checkout-cpf', 'text', 'cpf', cpf) }
          </label>
          <label htmlFor="phone">
            Telefone;
            { this.inputGenerator('checkout-phone', 'text', 'phone', phone) }
          </label>
          <label htmlFor="cep">
            CEP:
            { this.inputGenerator('checkout-cep', 'text', 'cep', cep) }
          </label>
          <label htmlFor="address">
            Endereço:
            { this.inputGenerator('checkout-address', 'text', 'address', address) }
          </label>
        </form>
        <button
          type="submit"
          onClick={ this.submitBtn }
        >
          Finalizar compra
        </button>
      </main>
    );
  }
}

export default Checkout;
