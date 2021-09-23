import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange = ({ target: { value, id} }) => {
    this.setState({
      [id]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { history, handleCleanCart } = this.props;
    handleCleanCart();
    this.setState({
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    }, () => {
      history.push('/');
    });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    return (
      <form onSubmit={ this.handleClick }>
        <section>
          <h3>Revise seus produtos</h3>
          <h3>Total:</h3>
        </section>
        <section>
          <h3>Informações do Comprador</h3>
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            id="fullname"
            value={ fullname }
            onChange={ this.handleChange }
            required
          />
          <input
            type="email"
            data-testid="checkout-email"
            placeholder="Email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="text"
            data-testid="checkout-cpf"
            placeholder="CPF"
            id="cpf"
            onChange={ this.handleChange }
            value={ cpf.replace(/[^0-9]/g, '') }
            maxLength="11"
            required
          />
          <input
            type="text"
            data-testid="checkout-phone"
            placeholder="Telefone"
            id="phone"
            value={ phone.replace(/[^0-9]/g, '') }
            onChange={ this.handleChange }
            required
          />
          <input
            type="text"
            data-testid="checkout-cep"
            placeholder="CEP"
            id="cep"
            value={ cep.replace(/[^0-9]/g, '') }
            onChange={ this.handleChange }
            required
          />
          <input
            type="text"
            data-testid="checkout-address"
            placeholder="Endereço"
            id="address"
            value={ address }
            onChange={ this.handleChange }
            required
          />
        </section>
        <section>
          <h3>Método de Pagamento</h3>
          <label htmlFor="boleto">
            Boleto
            <input type="radio" name="payment-option" value="boleto" id="boleto" />
          </label>
          <label htmlFor="credito">
            Crédito
            <input type="radio" name="payment-option" value="credito" id="credito" />
          </label>
          <label htmlFor="debito">
            Débito
            <input type="radio" name="payment-option" value="debito" id="debito" />
          </label>
        </section>
        <button type="submit">Comprar</button>
      </form>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  handleCleanCart: PropTypes.func.isRequired,
};

export default Checkout;
