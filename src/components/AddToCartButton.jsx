import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import { addProduct } from '../services/shopCartManag';

class AddToCartButton extends React.Component {
  handleClick = () => {
    const { product, actualizeQuantity } = this.props;
    addProduct(product);
    actualizeQuantity();
  }

  render() {
    const { homeIs } = this.props;
    const data = homeIs ? 'product-add-to-cart' : 'product-detail-add-to-cart';
    return (
      <button
        data-testid={ data }
        type="button"
        className="border-top-0
          border
          rounded-bottom
          bg-primary
          text-white
          p-2
          w-100
          "
        onClick={ this.handleClick }
      >
        Adicionar ao carrinho
        {' '}
        <FaShoppingCart />
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
}.isRequired;

export default AddToCartButton;
