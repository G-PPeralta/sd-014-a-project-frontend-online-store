import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div data-testid="product">
        <p>{ product.title }</p>
        <p><img src={ product.thumbnail } alt={ product.title } /></p>
        <p>{ product.price }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${product.id}`, state: product } }
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default Product;
