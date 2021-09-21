import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/cart',
            state: { cartList },
          } }
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  cartList: PropTypes
    .objectOf(PropTypes
      .objectOf(PropTypes.number)).isRequired,
};

export default CartButton;
