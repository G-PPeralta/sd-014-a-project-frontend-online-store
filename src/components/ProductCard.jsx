import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BagPlusFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/cartAPI';

export default class ProductCard extends Component {
  handleClick = () => {
    const { product } = this.props;
    addToCart(product);
  }

  renderFreeShipping() {
    return (
      <h2 data-testid="free-shipping">FRETE GRÁTIS!</h2>
    );
  }

  render() {
    const {
      // eslint-disable-next-line camelcase
      product: { title, thumbnail, price, id, shipping: { free_shipping } },
    } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: this.props,
          } }
        >
          <h2>{title}</h2>
        </Link>
        <img src={ thumbnail } alt={ `foto do produto ${title}` } />
        <h2>{`preço: ${price}`}</h2>
        {/* eslint-disable-next-line camelcase */}
        { free_shipping && this.renderFreeShipping()}
        <button
          type="button"
          className="btn btn-outline-primary"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          <BagPlusFill />
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};
