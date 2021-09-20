import React from 'react';

class PaymentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      states: [],
    };
  }

  componentDidMount() {
    this.getStates();
  }

  getStates = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          states: data,
        });
      });
  }

  render() {
    const { states } = this.state;
    return (
      <form>
        <h1>Informações do comprador</h1>
        <fieldset>
          <input
            type="text"
            data-testid="checkout-fullname"
            name="name"
            id="name"
            placeholder="nome"
          />
          <input
            type="text"
            data-testid="checkout-cpf"
            name="cpf"
            id="cpf"
            placeholder="cpf"
          />
          <input
            type="text"
            data-testid="checkout-email"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            type="text"
            data-testid="checkout-phone"
            name="phone"
            id="phone"
            placeholder="telefone"
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            data-testid="checkout-cep"
            name="CEP"
            id="CEP"
            placeholder="CEP"
          />
          <input
            type="text"
            data-testid="checkout-address"
            name="address"
            id="address"
            placeholder="endereço"
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="complement"
            id="complement"
            placeholder="complemento"
          />
          <input type="text" name="number" id="number" placeholder="número" />
          <input type="city" name="city" id="city" placeholder="cidade" />
          <select name="state" id="state">
            {states.map((state) => <option key={ state.sigla }>{state.sigla}</option>)}
          </select>
        </fieldset>
      </form>
    );
  }
}

export default PaymentForm;
