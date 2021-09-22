import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsCheckout from '../components/ProductsCheckout';
import CustomerInfo from '../components/CustomerInfo';
import PaymentMethod from '../components/PaymentMethod';

export default class Checkout extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Link className="return-button" to="/">
          <img
            alt="return-button"
            src="https://img.icons8.com/ios/50/000000/left2.png"
          />
        </Link>
        <ProductsCheckout />
        <CustomerInfo />
        <PaymentMethod />
        <button onClick={ this.handleSubmit } type="submit">Comprar</button>
      </div>
    );
  }
}
