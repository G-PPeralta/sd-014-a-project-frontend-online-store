import React, { Component } from 'react';
import '../styles/PaymentMethod.css';

export default class PaymentMethod extends Component {
  createCustomInput = (id) => (
    <input type="radio" id={ id } name="paymentMethod" value={ id } />
  );

  render() {
    return (
      <div className="payment-method">
        <h2>Método de Pagamento</h2>
        <div className="payment-method-content">
          <label htmlFor="creditCard">
            { this.createCustomInput('creditCard') }
            <span>Cartão de Crédito</span>
            <img alt="bank-card-back-side" src="https://img.icons8.com/ios/80/000000/bank-card-back-side.png" />
          </label>
          <label htmlFor="debitCard">
            { this.createCustomInput('debitCard') }
            <span>Cartão de Débito</span>
            <img alt="bank-card-back-side" src="https://img.icons8.com/ios/80/000000/bank-card-back-side.png" />
          </label>
          <label htmlFor="deposit">
            { this.createCustomInput('deposit') }
            <span>Depósito</span>
            <img alt="deposit" src="https://img.icons8.com/ios/80/000000/deposit--v1.png" />
          </label>
        </div>
      </div>
    );
  }
}
