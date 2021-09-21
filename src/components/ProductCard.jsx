import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { produto: { id, title, thumbnail, price } } = this.props;
    return (
      <div className="productCard" data-testid="product" id={ id }>
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <h2>{title}</h2>
          <img src={ thumbnail } alt="" />
          <p>{`R$ ${price}`}</p>

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
