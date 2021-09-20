import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { produto } = this.props;
    return (
      <Link to="/details" data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{produto.title}</h2>
          <img src={ produto.thumbnail } alt="" />
          <p>{produto.price}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default ProductCard;
