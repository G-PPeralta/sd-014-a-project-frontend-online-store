import React from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const { product } = this.props;
    product.quantity = product.quantity || 1;
    const list = localStorage.cartItems;
    let productList = [];
    if (list) productList = JSON.parse(list);
    productList.push(product);
    localStorage.cartItems = JSON.stringify(productList);
  }

  render() {
    const { dataTestId } = this.props;
    return (
      <input
        type="button"
        value="Adicionar item no carrinho"
        data-testid={ dataTestId }
        onClick={ this.addItem }
      />
    );
  }
}

AddCartButton.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
  }),
  dataTestId: PropTypes.string,
};

AddCartButton.defaultProps = {
  product: {
    quantity: 1,
  },
  dataTestId: '',
};

export default AddCartButton;
