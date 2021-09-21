import React from 'react';
import PropTypes from 'prop-types';

class shoppingCart extends React.Component {
  render() {
    const { children } = this.props;
    return <h2 data-testid="shopping-cart-empty-message">{ children }</h2>;
  }
}

shoppingCart.propTypes = {

  children: PropTypes.string.isRequired,
};

export default shoppingCart;
