import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class CartButton extends Component {
  render() {
    // const cartSize = localStorage.getItem('cartSize');
    const { cartSize } = this.props;
    // console.log(cartSize);
    // console.log(typeof (cartSize));
    // const cartInt = parseInt(cartSize, 10);
    // console.log(cartSize);
    // // const cartInt = parseInt(cartSize, 10);
    return (
      <div className="div-shopping-cart-icon">
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
          className="shopping-cart-button"
        >
          <CartIcon />
        </Link>
        <span
          data-testid="shopping-cart-size"
          className="shopping-cart-size"
        >
          { cartSize }
        </span>
      </div>
    );
  }
}

CartButton.propTypes = {
  cartSize: PropTypes.string.isRequired,
};

export default CartButton;
