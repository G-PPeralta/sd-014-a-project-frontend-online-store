import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product } = this.props;
    const savedProduct = JSON.parse(localStorage.getItem('cart')) || [];
    const newProduct = {
      id: product.title,
      price: product.price,
      quantity: 1,
    };
    const result = [...savedProduct, newProduct];
    localStorage.setItem('cart', JSON.stringify(result));
  }

  render() {
    return (
      <button
        type="submit"
        data-testid="product-add-to-cart"
        onClick={ this.handleClick }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddButton.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default AddButton;
