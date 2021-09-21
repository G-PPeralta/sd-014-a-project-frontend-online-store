import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Requisito 5: monta a estrutura do card do produto com título, imagem e preço
export default class ProductCard extends Component {
  render() {
    const { product: { thumbnail, title, price } } = this.props;

    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
