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
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default AddCartButton;
