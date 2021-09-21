import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackForm from '../components/FeedbackForm';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product: { title, price, thumbnail,
      id } } } } = this.props;
    return (
      <>
        <div>
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={ thumbnail } alt={ title } />
          <h3>
            R$
            {price}
          </h3>
          <button type="button"> Comprar </button>
        </div>
        <FeedbackForm id={ id } />
      </>

    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
