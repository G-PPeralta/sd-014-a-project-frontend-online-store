import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="card">
        <img src={ product.thumbnail } className="card-img-top" alt={ product.title } />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.price}
          </p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
}.isRequired;

export default ProductCard;
