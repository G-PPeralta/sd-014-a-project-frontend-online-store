import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackForm from '../components/FeedbackForm';
import { addToCart } from '../services/cartAPI';

class ProductDetails extends Component {
  handleClick = () => {
    const { location: { state: { product } } } = this.props;
    addToCart(product);
  }

  renderFreeShipping() {
    return (
      <h2 data-testid="free-shipping" className="text-success">FRETE GRÁTIS!</h2>
    );
  }

  render() {
    const { location: { state: { product: { title, price, thumbnail,
      id, shipping: { free_shipping: freeShipping } } } } } = this.props;
    return (
      <div className="d-flex flex-column align-items-center my-3">
        <div className="details-container rounded shadow">
          <div className="d-flex justify-content-start w-100">
            <h4 data-testid="product-detail-name">
              {title}
              {' '}
              - R$
              {' '}
              {price}
            </h4>
          </div>
          <div className="details">
            <div className="image-container">
              <img src={ thumbnail } alt={ title } className="details-image" />
              <button
                type="button"
                className="btn btn-outline-primary"
                data-testid="product-detail-add-to-cart"
                onClick={ this.handleClick }
              >
                Comprar
              </button>

            </div>
            <div className="d-flex flex-column justify-content-between">
              <h6>Especificações técnicas</h6>

              { freeShipping && this.renderFreeShipping() }
            </div>

          </div>

        </div>
        <FeedbackForm id={ id } />

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
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
