import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';
import Products from './Products';

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
        <header>
          <img className="img-logo" src="https://logodownload.org/wp-content/uploads/2017/11/kabum-logo-4.png" alt="logo" />
          <div className="pesquisa">
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <Products />
          </div>
          <Link data-testid="shopping-cart-button" to="/cart">
            <img className="img-cart" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-shopping-cart-interface-kiranshastry-solid-kiranshastry.png" alt="cart" />
          </Link>
        </header>
        <div className="item">
          <h3 className="title-product" data-testid="product-detail-name">
            { product.title }
          </h3>
          <img
            className="img-product-detail"
            src={ product.thumbnail }
            alt={ product.title }
          />
          <p className="price-product">{formatPrice(product.price)}</p>
          <AddCartButton testeid="product-detail-add-to-cart" product={ product } />
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  location: PropTypes.string,
}.isRequired;

export default Item;
