import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {

  handleClick=() => {
    const { product: { id } } = this.props;
    
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <button type="button">x</button>
        <img src={ product.thumbnail } alt="" />
        <div>{ product.title}</div>
        <button 
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleClick }
          name="decrementar"
        >
          -
        </button>
        <div>{ product.quantity }</div>
        <button
          type="button" 
          data-testid="product-increase-quantity"
          onClick={ this.handleClick }
          name="acrescentar"
        >
          +
        </button>
        <div>{ product.price }</div>

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
