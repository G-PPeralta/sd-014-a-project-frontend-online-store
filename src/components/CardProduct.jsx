import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProduct extends Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ image } alt={ title } />
        <p>{price}</p>
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
