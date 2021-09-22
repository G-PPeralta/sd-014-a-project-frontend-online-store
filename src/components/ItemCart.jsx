import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {
  handleClick=({ target }) => {
    const { name } = target;
    const { product: { product: { id } }, quantityChanger, removeItem } = this.props;
    if (name === 'remove') {
      return removeItem(id);
    }
    quantityChanger(name, id);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <button name="remove" onClick={ this.handleClick } type="button">x</button>
        <img src={ product.product.thumbnail } alt="" />
        <h3 data-testid="shopping-cart-product-name">{ product.product.title}</h3>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleClick }
          name="decrementar"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleClick }
          name="incrementar"
        >
          +
        </button>
        <span>{ product.product.price * product.quantity }</span>

      </div>
    );
  }
}
ItemCart.propTypes = {
  removeItem: PropTypes.func.isRequired,
  quantityChanger: PropTypes.func.isRequired,
  product: PropTypes.shape({
    product: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.string }),
    quantity: PropTypes.number,
  }).isRequired,
};

export default ItemCart;
