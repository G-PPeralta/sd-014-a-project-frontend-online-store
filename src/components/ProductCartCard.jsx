import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCartCard extends Component {
  render() {
    const { product: { title }, quantity } = this.props;
    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <h3 data-testid="shopping-cart-product-quantity">{quantity}</h3>
      </div>
    );
  }
}

ProductCartCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductCartCard;
