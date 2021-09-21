import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

class GoToCartButton extends Component {
  render() {
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
        className="d-flex text-decoration-none mx-4"
      >
        <div
          className="
          bg-white
          border
          border-primary
          py-2
          px-2
          rounded-start
          fs-6
          text-dark
          "
          style={ { userSelect: 'none' } }
        >
          1
        </div>
        <div
          className="
          btn
          btn-primary
          h-auto
          py-2
          px-3
          mr-3
          rounded-0
          rounded-end
          "
        >
          <FaShoppingCart className="fs-5" />
        </div>
      </Link>
    );
  }
}

export default GoToCartButton;
