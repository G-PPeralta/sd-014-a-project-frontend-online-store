import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProduct extends Component {
  handleClick=(product) => {
    const quantityProd = product;
    quantityProd.quantity = 1;
    if (localStorage.cart) {
      const { cart } = localStorage;
      const cartJSON = JSON.parse(cart);
      const cartUpDate = cartJSON.concat(quantityProd);
      localStorage.setItem('cart', JSON.stringify(cartUpDate));
    } else {
      localStorage.setItem('cart', JSON.stringify([quantityProd]));
    }
  }

  render() {
    const { product } = this.props;
    const { thumbnail, title, price, id } = product;
    return (
      <div
        data-testid="product"
        className="d-flex
        flex-column
        m-3 p-2 justify-content-around
        align-items-center card-product"
      >
        <Link
          to={ {
            pathname: `/ProductDetails/${id}`,
            state: { product },
          } }
        >
          <div data-testid="product-detail-link">
            <img src={ thumbnail } alt={ title } />
            <h5>{title}</h5>
            <p>{`R$${price}`}</p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => { this.handleClick(product); } }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
CardProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
