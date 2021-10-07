import React from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends React.Component {
  render() {
    const { product, handleAddToCart, testId } = this.props;
    return (
      <button
        data-testid={ testId }
        onClick={ () => handleAddToCart(product) }
        type="button"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default AddCartButton;
