import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// https://react-icons.github.io/react-icons
// Instalar => npm install react-icons --save
import { FaCartArrowDown } from 'react-icons/fa';

class BtnCart extends React.Component {
  render() {
    const { handleSubmit, query, selectedId } = this.props;
    return (
      <div>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
          onClick={ (event) => {
            event.preventDefault();
            handleSubmit(selectedId, query);
          } }
        >
          <FaCartArrowDown id="icon" />
        </Link>
      </div>
    );
  }
}

BtnCart.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
  selectedId: PropTypes.string,
};

BtnCart.defaultProps = {
  selectedId: '',
  query: '',
};

export default BtnCart;
