import React from 'react';
import PropTypes from 'prop-types';
import FormReview from '../components/Reviews/FormReview';

export default class ProductDetails extends React.Component {
  render() {
    const {
      location: {
        state: { price, title, thumbnail },
      },
    } = this.props;
    return (
      <div>
        <h3 data-testid="product-detail-name">{`Produto${title} - R$ ${price}`}</h3>
        <img src={ thumbnail } alt="thumbnail" />
        <FormReview />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      price: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
