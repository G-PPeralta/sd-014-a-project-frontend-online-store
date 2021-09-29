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
    const { id, price, title, thumbnail } = product;
    const { quant } = this.state;
    return (

      <div key={ id } className="cart-item rounded shadow">
        <img src={ thumbnail } alt="cart product" className="w-25" />

        <div className="w-50 d-flex align-items-center">
          <span data-testid="shopping-cart-product-name">{title}</span>
        </div>
        <div className="d-flex align-items-baseline mx-3">
          <Dash
            data-testid="product-decrease-quantity"
            onClick={ () => this.handleQuant(false, product) }
          />
          <p data-testid="shopping-cart-product-quantity">{quant}</p>
          <Plus
            data-testid="product-increase-quantity"
            onClick={ () => this.handleQuant(true, product) }
          />

        </div>

        <p>{`R$ ${(price * quant).toFixed(2)}`}</p>

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
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
