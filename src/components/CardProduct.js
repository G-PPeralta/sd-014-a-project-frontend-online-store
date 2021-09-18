import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProduct extends Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price, id } = product;
    return (
      <div
        data-testid="product"
        className="d-flex
        flex-column
        m-3 p-2 justify-content-around
        align-items-center card-product"
      >
        <Link to={ `/ProductDetails/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt={ title } />
          <h5>{title}</h5>
          <p>{`R$${price}`}</p>
        </Link>
      </div>
    );
  }
}
CardProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
