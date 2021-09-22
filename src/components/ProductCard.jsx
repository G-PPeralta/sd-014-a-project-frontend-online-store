import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addProduct } from '../services/addFunctions';

// Requisito 5: monta a estrutura do card do produto com título, imagem e preço
export default class ProductCard extends Component {
  handleClick = () => {
    const { product } = this.props;
    addProduct(product);
  }

  render() {
    const { product } = this.props;

    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${product.id}`,
            state: {
              product,
            },
          } }
        >
          <h3>{ product.title }</h3>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{`R$ ${product.price}`}</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
