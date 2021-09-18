import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import { addProduct } from '../services/shopCartManag';

class AddToCardButton extends React.Component {
  handleClick = () => {
    const { product } = this.props;
    addProduct(product);
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
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

AddToCardButton.propTypes = {
  product: PropTypes.object.isRequired,
}.isRequired;

export default AddToCardButton;
