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
      <section className="product-card">
        <div
          data-testid="product"
        >
          <Link
            data-testid="product-detail-link"
            to={ { pathname: `/product/${product.id}`, state: { product } } }
            className="cart-link"
          >
            <h1>{ product.title }</h1>
          </Link>
          <img
            src={ product.thumbnail }
            alt="imagem do produto"
            className="img-product-card"
          />
        </div>
        <div>
          <p>{ `R$${product.price}` }</p>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ this.handleClick }
            className="button-cart-link"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </section>
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
