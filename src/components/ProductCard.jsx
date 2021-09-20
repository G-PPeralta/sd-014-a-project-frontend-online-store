import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const {
      product: { title, thumbnail, price },
    } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <h3 className="product-title">{title}</h3>
        <img alt={ title } className="product-thumbnail" src={ thumbnail } />
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
