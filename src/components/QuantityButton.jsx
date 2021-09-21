import React from 'react';
import PropTypes from 'prop-types';
import { addProduct, decreaseProduct, removeProduct } from '../services/shopCartManag';

class QuantityButton extends React.Component {
  render() {
    const { product, handleQuantityButtonsClick, conditionQuantity } = this.props;
    return (
      <div className="w-100">
        <button
          className="w-25 btn btn-danger rounded-0"
          onClick={ () => {
            removeProduct(product);
            handleQuantityButtonsClick('', product);
          } }
          type="button"
        >
          X
        </button>
        <button
          className="w-25 btn btn-primary rounded-0"
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
          className="w-50 btn btn-primary rounded-0"
          data-testid="product-increase-quantity"
          name="increase"
          disabled={ conditionQuantity }
          onClick={ () => {
            addProduct(product);
            handleQuantityButtonsClick('increase', product);
          } }
          type="button"
        >
          +
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
