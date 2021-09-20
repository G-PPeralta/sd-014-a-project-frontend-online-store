import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
