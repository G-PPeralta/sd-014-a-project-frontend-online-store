import React from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends React.Component {
  render() {
    const { product, handleAddToCart } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
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
};

export default AddCartButton;
