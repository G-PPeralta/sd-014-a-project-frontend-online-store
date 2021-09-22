import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BagPlusFill } from 'react-bootstrap-icons';
import FeedbackForm from '../components/FeedbackForm';
import { addToCart } from '../services/cartAPI';
import CartButton from '../components/CartButton';

class ProductDetails extends Component {
  handleClick = () => {
    const { location: { state: { product } } } = this.props;
    addToCart(product);
  }

  renderFreeShipping() {
    return (
      <h2 data-testid="free-shipping">FRETE GRÁTIS!</h2>
    );
  }

  render() {
    const { location: { state: { product: { title, price, thumbnail,
      id, shipping: { free_shipping: freeShipping } } } } } = this.props;
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
        <button
          type="button"
          className="btn btn-outline-primary"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          <BagPlusFill />
        </button>
        <CartButton />
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
