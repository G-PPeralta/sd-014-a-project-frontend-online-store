import React, { Component } from 'react';
import PropTypes from 'prop-types';
import saveLocalStorage from '../services/localStorage';

class AddCart extends Component {
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
