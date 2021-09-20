import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddItemToCart from './AddItemToCart';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    return (
      <div className="product-card" data-testid="product" id={ id }>
        <Link
          data-testid="product-detail-link"
          to={ `/product-details/${id}` }
        >
          <h4>{ title }</h4>
        </Link>
        <img src={ thumbnail } alt="Product Thumbnail" />
        <span>
          { `${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}` }
        </span>
        <AddItemToCart dataTestId="product-add-to-cart" product={ product } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  key: PropTypes.string.isRequired,
  product: PropTypes.objectOf(PropTypes.any).isRequired,
}.isRequired;
