import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductsCard extends Component {
  render() {
    const {
      product: { title, price, thumbnail },
      id,
    } = this.props;
    return (
      <li data-testid="product">
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
        >
          <h1>{ title }</h1>
          <img src={ thumbnail } alt={ `${title}_image` } />
          <p>{ price }</p>
        </Link>
      </li>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductsCard;
