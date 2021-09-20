import React, { Component } from 'react';
import PropTypes from 'prop-types';
import saveLocalStorage from '../services/localStorage';

class AddCart extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

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
    return (
      <div>
        <p>Add Carinho</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => { saveLocalStorage(product); } }
        >
          Adicionar ao Carrinho!
        </button>
      </div>
    );
  }
}

AddCart.propTypes = {
  addCart: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default AddCart;
