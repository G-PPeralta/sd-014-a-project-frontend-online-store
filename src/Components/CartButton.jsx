import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    const { quant } = this.props;

    return (
      <span>
        <Link data-testid="shopping-cart-button" to="/mycart">Meu carrinho</Link>
        <span data-testid="shopping-cart-size">{ quant }</span>
      </span>
    );
  }
}

CartButton.propTypes = {
  quant: PropTypes.number,
}.isRequired;

export default CartButton;
