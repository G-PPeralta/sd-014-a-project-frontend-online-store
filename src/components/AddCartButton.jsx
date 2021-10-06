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
    const { testeid } = this.props;
    return (
      <button
        type="submit"
        id="btn-addCart-product"
        data-testid={ testeid }
        onClick={ this.handleClick }
      >
        <p className="text-btn-addCart">Adicionar ao Carrinho</p>
        <img className="img-cart-product" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-shopping-cart-interface-kiranshastry-solid-kiranshastry.png" alt="cart" />
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
  testeid: PropTypes.string.isRequired,
};

export default AddButton;
