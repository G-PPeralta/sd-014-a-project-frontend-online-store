import React from 'react';
import PropTypes from 'prop-types';
import { addToCart } from '../services/cart';

class AddCartButton extends React.Component {
  handleAddToCart = () => {
    const { category, id } = this.props;
    addToCart(category, id);
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={ this.handleAddToCart }
        type="button"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddCartButton.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default AddCartButton;
