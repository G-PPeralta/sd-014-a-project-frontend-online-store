import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  renderFreeShipping() {
    return (
      <h2 data-testid="free-shipping">FRETE GRÁTIS!</h2>
    );
  }

  render() {
    const { location: { state: { product: { title, price, thumbnail,
      shipping: { free_shipping: freeShipping } } } } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <h3>
          R$
          {price}
        </h3>
        { freeShipping && this.renderFreeShipping() }
        <button type="button"> Comprar </button>
      </div>
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
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
