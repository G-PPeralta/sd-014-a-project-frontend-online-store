import React from 'react';
import PropTypes from 'prop-types';

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
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      price: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
