import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class CardProduct extends Component {
  render() {
    const { title, image, price, id } = this.props;
    return (
      <div data-testid="product">
        <Link data-testid="product-detail-link" to={`/${id}`} >
          <h2>{title}</h2>
          <img src={ image } alt={ title } />
          <p>{price}</p>
          </Link> 
      </div>
    );
  }
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProduct;
