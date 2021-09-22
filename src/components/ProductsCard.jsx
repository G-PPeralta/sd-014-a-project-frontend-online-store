import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import addToCart from '../services/localstorage';

class ProductsCard extends Component {
  render() {
    const {
      product: { title, price, thumbnail },
      id,
      query,
      categoryId,
    } = this.props;
    return (
      <li data-testid="product">
        <Link
          to={ `/product-details/${id}&${query}&${categoryId}` }
          data-testid="product-detail-link"
        >
          <h1>{ title }</h1>
          <img src={ thumbnail } alt={ `${title}_image` } />
          <p>{ price }</p>
          <button
            type="button"
            onClick={ () => addToCart(product) }
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
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
  query: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default ProductsCard;
