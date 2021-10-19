import React, { Component } from 'react';
import '...src/style/CustomerInfo.css';

export default class CustomerInfo extends Component {
  renderCustomInput = (id, type) => (
    <input data-testid={ `checkout-${id}` } id={ id } type={ type } name={ id } />
  );

  renderForm = () => (
    <form>
      <label htmlFor="fullname">
        Nome completo
        {this.renderCustomInput('fullname', 'text')}
      </label>
      <label htmlFor="email">
        Email
        {this.renderCustomInput('email', 'email')}
      </label>
      <label htmlFor="cpf">
        CPF
        {this.renderCustomInput('cpf', 'text')}
      </label>
      <label htmlFor="phone">
        Telefone
        {this.renderCustomInput('phone', 'tel')}
      </label>
      <label htmlFor="cep">
        CEP
        {this.renderCustomInput('cep', 'text')}
      </label>
      <label htmlFor="address">
        Endereço
        {this.renderCustomInput('address', 'text')}
      </label>
    </form>
  );

  render() {
    return (
      <div className="customer-info">
        <h2>Informações do Comprador</h2>
        {this.renderForm()}
      </div>
    );
  }
}
