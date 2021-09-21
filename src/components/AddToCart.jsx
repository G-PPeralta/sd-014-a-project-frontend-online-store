import React, { Component } from 'react';

class AddToCart extends Component {
 

  handleClick = (event) => {
    const { getItem } = this.props;
  getItem(event.target.value);
  }

  render() {
    const { itemTitle, itemPrice } = this.props;
    return (
      <div>
        <button
          type="button"
          value={ itemTitle }
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default AddToCart;
