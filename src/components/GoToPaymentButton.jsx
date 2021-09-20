import React from 'react';
import { Link } from 'react-router-dom';
import { MdPayment } from 'react-icons/md';

class GoToPaymentButton extends React.Component {
  render() {
    return (
      <Link
        to="/payment"
        className="btn btn-primary h-auto py-2 px-3"
        data-testid="checkout-products"
      >
        <MdPayment className="fs-5" />
      </Link>
    );
  }
}

export default GoToPaymentButton;
