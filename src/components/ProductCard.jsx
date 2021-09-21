import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const {
      product: { title, thumbnail, price, id },
    } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: {
              title,
              thumbnail,
              price,
              id,
            },
          } }
        >
          <h3 className="product-title">{title}</h3>
          <img alt={ title } className="product-thumbnail" src={ thumbnail } />
          <p>{`R$${price.toFixed(2)}`}</p>
        </Link>
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
  }).isRequired,
};
