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
    const productList = JSON.parse(localStorage.cartItems);
    productList.push(product);
    localStorage.cartItems = JSON.stringify(productList);
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="Adicionar item no carrinho"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addItem }
        />
      </div>
    );
  }
}

AddCartButton.propTypes = {
  product: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default AddCartButton;
