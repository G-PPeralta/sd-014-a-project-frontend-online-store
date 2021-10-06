import React from 'react';
// import Estados from './Estados';
import cityAndStates from '../cityAndStates';

class InfoUser extends React.Component {
  constructor() {
    super();
    this.state = {
      state: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value.toUpperCase() });
  }

  render() {
    const { state: curState } = this.state;
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
        <input
          type="text"
          list="states"
          placeholder="Estado"
          onChange={ this.handleChange }
          name="state"
          value={ curState }
        />
        <datalist id="states">
          {cityAndStates.map((state, index) => (
            <option
              key={ state.sigla + index }
              value={ state.sigla }
            >
              {state.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
            </option>
          ))}
        </datalist>
        <input type="text" list="city" />
        <datalist id="city">
          {cityAndStates.filter((state) => curState === '' || state.sigla === curState)
            .map((state) => state.cidades.map((city, index) => (
              <option
                key={ city + index }
                value={ city }
              >
                {city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
              </option>
            )))}
        </datalist>
        {/* <input type="text" placeholder="Cidade" /> */}
        {/* <Estados /> */}
      </form>
    );
  }
}

export default InfoUser;
