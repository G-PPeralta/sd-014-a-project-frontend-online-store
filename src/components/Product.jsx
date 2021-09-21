import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <nav data-testid="product">
        <h1>
          { product.title }
        </h1>
        <img src={ product.thumbnail } alt="" data-testeid="product-detail-link" />
        <p>
          { product.price }
        </p>
        <hr />
      </nav>
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
