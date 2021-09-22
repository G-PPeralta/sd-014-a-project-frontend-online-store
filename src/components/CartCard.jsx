import React, { Component } from 'react'

export default class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  increaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1
    }));
  }

  decreaseQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1
    }));
  }}

  render() {
    const { item } = this.props;
    const { quantity } = this.state;
    return (
        <div >
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <button data-testid="product-decrease-quantity" onClick={ this.decreaseQuantity }
            >-</button>
            <button data-testid="product-increase-quantity" onClick={ this.increaseQuantity }
            >+</button>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          </div>
    )
  }
}
