import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { produto } = this.props;
    return (
      <div data-testid="product" id="Card">
        <Link
          data-testid="product-detail-link"
          key={ produto.id }
          to={ `/products/${produto.category_id}/${produto.id}` }
        >
          <h4>{produto.title}</h4>
          <img src={ produto.thumbnail } alt="" className="ProdImg" />
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
