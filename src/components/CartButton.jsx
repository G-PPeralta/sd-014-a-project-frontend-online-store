import React from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';

class CartButton extends React.Component {
  render() {
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <GrCart className="h1" />
      </Link>
    );
  }
}

export default CartButton;
