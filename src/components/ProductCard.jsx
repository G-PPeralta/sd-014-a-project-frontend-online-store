import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { produto } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          key={ produto.id }
          to={ `/products/${produto.category_id}/${produto.id}` }
        >
          <h2>{produto.title}</h2>
          <img src={ produto.thumbnail } alt="" />
          <p>{produto.price}</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default ProductCard;
