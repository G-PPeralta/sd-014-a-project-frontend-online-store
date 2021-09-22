import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  handleAddToCart = () => {
    const { id, category } = this.props;
    const newItem = { id, category, qty: 1 };
    const cart = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem('cart', JSON.stringify([...cart, newItem]));
  };

  render() {
    const product = this.props;
    return (
      <div data-testid="product">
        <h4>{ product.title }</h4>
        <img src={ product.thumbnail } alt="Imagem do produto" />
        <p>{ product.price }</p>
        <Link
          data-testid="product-detail-link"
          to={ `/productDetails/${product.category}/${product.id}` }
        >
          Detalhes
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.handleAddToCart }
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
