import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as cart from '../services/cart';

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
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => cart.addProductToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default Product;
