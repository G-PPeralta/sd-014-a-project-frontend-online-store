import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCart extends Component {
  constructor() {
    super();

    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    const { title, price, thumbnail } = this.props;
    localStorage.setItem(`item ${title}`, [`${title} - R$ ${price}`, `${thumbnail}`]);
  }

  render() {
    return (
      <div>
        <p>Add Carinho</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addCart }
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
