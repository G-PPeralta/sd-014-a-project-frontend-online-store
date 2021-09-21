import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsCard extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <li>
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `${title}_image` } />
        <p>{ price }</p>
      </li>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
