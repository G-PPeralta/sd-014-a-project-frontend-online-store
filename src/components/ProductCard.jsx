import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  click = () => {
    const { produto } = this.props;

    localStorage.getItem('cart');
    const parse = JSON.parse(localStorage.getItem('cart'));
    parse.push({ ...produto });
    localStorage.setItem('cart', JSON.stringify(parse));
  }

  render() {
    const { produto } = this.props;
    return (
      <div data-testid="product">
        <h2>{produto.title}</h2>
        <img src={ produto.thumbnail } alt="" />
        <p>{produto.price}</p>
        <button type="button" onClick={ this.click }>Adicionar ao carrinho</button>
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
