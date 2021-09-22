import React, { Component } from 'react';
import ShoppingIcon from '../components/ShoppingIcon';
import { getCartItems } from '../services/addFunctions';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const storage = getCartItems();
    this.setCartItems(storage);
  }

  setCartItems = (storage) => {
    this.setState({ items: storage });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <ShoppingIcon />
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        { items.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        )) }
      </div>
    );
  }
}
