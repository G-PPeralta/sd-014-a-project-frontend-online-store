import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCartCard extends Component {
  render() {
    const { product: { title, id }, handleAdd, handleRmv, quantity } = this.props;
    return (
      <div>
        <div>
          <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        </div>
        <div>
          <button
            type="button"
            name={ id }
            onClick={ handleAdd }
            data-testid="product-increase-quantity"
          >
            Adicionar
          </button>
          <h3 data-testid="shopping-cart-product-quantity">{quantity}</h3>
          <button
            type="button"
            name={ id }
            onClick={ handleRmv }
            data-testid="product-decrease-quantity"
          >
            Reduzir
          </button>
        </div>
      </div>
    );
  }
}

ProductCartCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRmv: PropTypes.func.isRequired,
};

export default ProductCartCard;
