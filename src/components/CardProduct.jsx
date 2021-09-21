import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class CardProduct extends Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ image } alt={ title } />
        <p>{price}</p>
        <AddToCart itemTitle={title} itemPrice={price} />
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
