import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <Link data-testid="product-detail-link" to={{pathname: `/product/${product.id}`, state: { product }}}>
        <div data-testid="product">
          <h1>{ product.title }</h1>
          <img src={ product.thumbnail } alt="imagem do produto" />
          <p>{ product.price }</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
