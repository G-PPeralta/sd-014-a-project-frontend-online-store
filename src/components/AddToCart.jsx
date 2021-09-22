import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
  handleClick = (event) => {
    const { getItem } = this.props;
    getItem(event.target.value);
  }

  render() {
    const { itemTitle, testId } = this.props;
    return (
      <div>
        <button
          type="button"
          value={ itemTitle }
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
};

export default AddToCart;
