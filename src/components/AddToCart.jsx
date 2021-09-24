import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
  handleClick = ({ target: { name, value } }) => {
    const { getItem } = this.props;
    getItem(name, value);
  }

  render() {
    const { itemTitle, testId, itemPrice } = this.props;
    return (
      <div>
        <button
          type="button"
          name={ itemTitle }
          value={ itemPrice }
          onClick={ this.handleClick }
          data-testid={ testId }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddToCart.propTypes = {
  getItem: PropTypes.func.isRequired,
  itemTitle: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  itemPrice: PropTypes.string.isRequired,
};

export default AddToCart;
