import React from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends React.Component {
  render() {
    const { category, id, handleAddToCart } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={ () => handleAddToCart(category, id) }
        type="button"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddCartButton.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default AddCartButton;
