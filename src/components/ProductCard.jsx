import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const product = this.props;
    return (
      <div data-testid="product">
        <h4>{ product.title }</h4>
        <img src={ product.thumbnail } alt="Imagem do produto" />
        <p>{ product.price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductCard;
