import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h1>
          { product.title }
        </h1>
        <img src={ product.thumbnail } alt="" />
        <p>
          { product.price }
        </p>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
