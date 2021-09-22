import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  handleClick = () => {
    const { id } = this.props;
    const savedItem = JSON.parse(localStorage.getItem('itemID')) || []; // constroi objeto pelo que foi guardado no localStorage caso exista
    console.log(savedItem);
    const response = savedItem.push(id);
    localStorage.setItem('itemID', JSON.stringify(response)); // guarda id de um produto no localStorage para uso no shoppingCart
    console.log(id);
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
  id: PropTypes.string.isRequired,
};

export default AddButton;
