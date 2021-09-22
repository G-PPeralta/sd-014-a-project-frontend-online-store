import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProduct } from '../services/localStorage';

class ProductCard extends Component {
  handleClick = () => {
    const { product } = this.props;
    addProduct(product);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <div data-testid="product">
          <Link
            data-testid="product-detail-link"
            to={ { pathname: `/product/${product.id}`, state: { product } } }
          >
            <h1>{ product.title }</h1>
          </Link>
          <img src={ product.thumbnail } alt="imagem do produto" />
          <p>{ product.price }</p>
        </div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
