import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{product.title}</p>
        <p>{product.price}</p>
        <Link
          to={ { pathname: `/product/${product.id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          Mais Informações
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
