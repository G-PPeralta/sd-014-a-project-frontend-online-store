import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './style/CartButton.css';

class CartButton extends React.Component {
  render() {
    return (
      <div className="Cart">
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

// CartButton.propTypes = {
//   cartList: PropTypes
//     .objectOf(PropTypes
//       .objectOf(PropTypes.number)).isRequired,
// };

export default CartButton;
