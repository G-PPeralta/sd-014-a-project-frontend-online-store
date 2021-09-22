import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';

class CartButton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <GrCart className="h1" />
        <span data-testid="shopping-cart-size">{children}</span>
      </Link>
    );
  }
}

CartButton.propTypes = {
  children: PropTypes.number.isRequired,
};

export default CartButton;
