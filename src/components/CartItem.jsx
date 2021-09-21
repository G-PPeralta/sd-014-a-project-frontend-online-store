import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Plus, Dash } from 'react-bootstrap-icons';
import { addToCart, readCartItems, removeFromCart } from '../services/cartAPI';

class CartItem extends Component {
  constructor(props) {
    super(props);
    const {
      product: { quant = 1 },
    } = props;
    this.state = {
      quant,
    };
  }

  handleQuant = (operation, product) => {
    const { quant } = this.state;
    const { id } = product;
    if (operation) {
      addToCart(product);
    } else {
      removeFromCart(id, quant);
    }
    const cartItems = readCartItems();
    const cartItem = cartItems.find((item) => item.id === product.id);
    this.setState({ quant: cartItem.quant });
  };

  render() {
    const { product } = this.props;
    const { id, price, title } = product;
    const { quant } = this.state;
    return (
      <div>
        <div key={ id }>
          <h2 data-testid="shopping-cart-product-name">{title}</h2>
          <h2>{`R$ ${(price * quant).toFixed(2)}`}</h2>
          <Plus
            data-testid="product-increase-quantity"
            onClick={ () => this.handleQuant(true, product) }
          />
          <h2 data-testid="shopping-cart-product-quantity">{quant}</h2>
          <Dash
            data-testid="product-decrease-quantity"
            onClick={ () => this.handleQuant(false, product) }
          />
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    quant: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
