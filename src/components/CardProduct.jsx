import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

class CardProduct extends Component {
  render() {
    const { title, image, price, getItem, id } = this.props;
    return (
      <div data-testid="product">
        <Link data-testid="product-detail-link" to={ `/${id}/${title}` }>
          <h2>{title}</h2>
          <img src={ image } alt={ title } />
          <p>{price}</p>
        </Link>
        <AddToCart itemTitle={ title } itemPrice={ price } getItem={ getItem } />
      </div>
    );
  }
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  getItem: PropTypes.func.isRequired,
};

export default CardProduct;
