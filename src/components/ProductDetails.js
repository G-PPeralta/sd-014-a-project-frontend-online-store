import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { location: { state: { product } } } = this.props;
    console.log(this.props);
    return (
      <p data-testid="product-detail-name">
        { product.title }
      </p>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
