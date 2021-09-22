import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Pra formaatar o preço do produto, segui os passos de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat */

const formatPrice = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

class Item extends Component {
  render() {
    const { location } = this.props;
    const { product } = location.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{formatPrice(product.price)}</p>
      </div>
    );
  }
}

Item.propTypes = {
  location: PropTypes.string,
}.isRequired;

export default Item;
