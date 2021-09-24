import React, { Component } from 'react';
import ChangeQuantity from './ChangeQuantity';

class ItemQuantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  handleClick = (event) => {
    const { quantity } = this.state;
    const prevQuantity = quantity;
    if (event.target.value === '+') this.setState({ quantity: prevQuantity + 1 });
    else {
      let decreaseQuantity = prevQuantity - 1;
      if (decreaseQuantity < 0) decreaseQuantity = 0;
      this.setState({ quantity: decreaseQuantity });
    }
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <ChangeQuantity
          testId="product-decrease-quantity"
          handleClick={ this.handleClick }
          signal="-"
        />
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <ChangeQuantity
          testId="product-increase-quantity"
          handleClick={ this.handleClick }
          signal="+"
        />
      </div>
    );
  }
}

export default ItemQuantity;
