import React from 'react';
import PropTypes from 'prop-types';
import { addProduct, decreaseProduct, removeProduct } from '../services/shopCartManag';

class QuantityButton extends React.Component {
  render() {
    const { product, handleQuantityButtonsClick } = this.props;
    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          name="increase"
          onClick={ () => {
            addProduct(product);
            handleQuantityButtonsClick('increase', product);
          } }
          type="button"
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          disabled={ product.counter === 1 }
          onClick={ () => {
            decreaseProduct(product);
            handleQuantityButtonsClick('decrease', product);
          } }
          type="button"
        >
          -
        </button>
        <button
          onClick={ () => {
            removeProduct(product);
            handleQuantityButtonsClick('', product);
          } }
          type="button"
        >
          X
        </button>
      </div>
    );
  }
}

QuantityButton.propTypes = {
  product: PropTypes.object,
  handleQuantityButtonsClick: PropTypes.func,
}.isRequired;

export default QuantityButton;
