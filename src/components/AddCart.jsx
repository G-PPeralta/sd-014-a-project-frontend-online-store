import React, { Component } from 'react';

import ShoppingCart from '../pages/shoppingCart';

export class AddCart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ShoppingCart>
          <h2>{produto.title}</h2>
          <img src={ produto.thumbnail } alt="" />
          <p>{produto.price}</p>
        </ShoppingCart>
      </div>
    );
  }
}

export default AddCart;
