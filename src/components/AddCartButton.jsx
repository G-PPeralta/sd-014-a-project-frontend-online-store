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
    return (
      <div>
        <input
          type="button"
          value="Adicionar item no carrinho"
          data-testid="product-add-to-cart"
          onClick={ this.addItem }
        />
      </div>
    );
  }
}

AddCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};

AddCartButton.defaultProps = {
  product: {
    quantity: 1,
  },
};

export default AddCartButton;
