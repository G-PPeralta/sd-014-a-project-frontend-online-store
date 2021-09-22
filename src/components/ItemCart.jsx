import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {
  handleClick=({ target }) => {
    const { product: { id }, quantityChanger } = this.props;
    quantityChanger(target.name, id);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <button type="button">x</button>
        <img src={ product.thumbnail } alt="" />
        <h3 data-testid="shopping-cart-product-name">{ product.title}</h3>
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
        <span>{ product.price * product.quantity }</span>

      </div>
    );
  }
}
ItemCart.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default ItemCart;
