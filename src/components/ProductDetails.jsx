import React from 'react';
import PropTypes from 'prop-types';
import ProductReviewForm from './ProductReviewForm';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state: { title, price, thumbnail } } = location;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <ProductReviewForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
