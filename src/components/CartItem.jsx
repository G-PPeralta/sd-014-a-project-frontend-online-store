import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);
    const { product: { quantity } } = this.props;
    this.state = {
      quantityItem: quantity,
    };
  }

  render() {
    const { product: { title, price } } = this.props;

    const { quantityItem } = this.state;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <h2>{ price }</h2>
        <span data-testid="shopping-cart-product-quantity">{ quantityItem }</span>
        <button
          type="button"
          name="add"
          data-testid="product-increase-quantity"
          onClick={ () => { this.setState({ quantityItem: quantityItem + 1 }); } }
        >
          +
        </button>
        <button
          type="button"
          name="sub"
          data-testid="product-decrease-quantity"
          onClick={ () => {
            if (quantityItem === 0) return this.setState({ quantityItem: 0 });
            this.setState({ quantityItem: quantityItem - 1 });
          } }
        >
          -
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
