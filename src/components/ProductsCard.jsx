import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsCard extends Component {
  render() {
    const { product: { name, price, thumbnail } } = this.props;
    return (
      <li>
        <h1>{ name }</h1>
        <img src={ thumbnail } alt={ `${name}_image` } />
        <p>{ price }</p>
      </li>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
