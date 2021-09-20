import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { produto } = this.props;
    return (
      <div>
        <h2>{produto.title}</h2>
        <img src={ produto.thumbnail } alt="" />
        <p>{produto.price}</p>
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
