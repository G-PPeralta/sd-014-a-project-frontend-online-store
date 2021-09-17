import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card" data-testid="product">
        <img src={ product.thumbnail } className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{ product.title }</h3>
          <p className="card-text">{ product.price }</p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
