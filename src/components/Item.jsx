import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';

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
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/000000/external-cart-grocery-flatart-icons-outline-flatarticons.png" alt="cart" />
        </Link>
        <h3 data-testid="product-detail-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{formatPrice(product.price)}</p>
        <AddCartButton testeid="product-detail-add-to-cart" product={ product } />
      </div>
    );
  }
}

Item.propTypes = {
  location: PropTypes.string,
}.isRequired;

export default Item;
