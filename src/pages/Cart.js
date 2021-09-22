import React from 'react';

import * as api from '../services/shoppingCartAPI';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.api.readShoppingCart();
  }

  handleAddItem = ({ target }) => {
    const { items } = this.state;
    api.addItemToCart(items.find(({ id }) => id === target.key));
    this.setState({ isLoading: false });
    // items.find((item) => api.addItemToCart(item));
  }

  handleSubItem = ({ target }) => {
    /* const items = api.readShoppingCart();
    console.log(target);
    this.setState({
      quantity: items.find((item) => api.subItemToCart(item)),
    });
    // items.find((item) => api.subItemToCart(item)); */
  }

  handleRemoveItem = () => {
    /* const items = api.readShoppingCart();
    this.setState({
      quantity: items.filter((item) => api.removeItemFromCart(item)),
    }); */
  }

  render() {
    const items = api.readShoppingCart();

    if (!items.length) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }

    return (
      <div data-testid="shopping-cart">
        Seu carrinho tem:
        { items.map((item, index) => (
          <div key={ index }>
            Nome:&nbsp;
            <div data-testid="shopping-cart-product-name">{ item.title }</div>
            Quantidade:&nbsp;
            <div data-testid="shopping-cart-product-quantity">{ item.shopping_cart }</div>
            <div id="buttons">
              <button
                type="button"
                key={ item.id }
                data-testid="product-decrease-quantity"
                onClick={ this.handleSubItem }
              >
                -
              </button>
              <button
                type="button"
                key={ item.id }
                data-testid="product-increase-quantity"
                onClick={ this.handleAddItem }
              >
                +
              </button>
              <button
                type="button"
                key={ item.id }
                onClick={ this.handleRemoveItem }
              >
                X
              </button>
            </div>
            <div id="price-per-item">
              R$
              {' '}
              { (item.price * item.shopping_cart).toFixed(2) }
            </div>
          </div>
        )) }
        <div id="total-price">
          Valor Total:&nbsp;
          { items.reduce((acc, item, index) => (
            acc + item.price
          ), 0) }
        </div>
      </div>
    );
  }
}
