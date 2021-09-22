import React, { Component } from 'react';
import ItemQuantity from '../components/ItemQuantity';
import RemoveItem from '../components/RemoveItem';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 0,
      cartItems: [],
    };
  }

  componentDidMount() {
    this.getSavedCart();
  }

  getSavedCart = () => {
    if (!JSON.parse(localStorage.getItem('nameItems'))) {
      localStorage.setItem('nameItems', JSON.stringify([]));
    }
    if (!JSON.parse(localStorage.getItem('priceItems'))) {
      localStorage.setItem('priceItems', JSON.stringify([]));
    }
    const savedNames = JSON.parse(localStorage.getItem('nameItems'));
    const savedPrices = JSON.parse(localStorage.getItem('priceItems'));
    const cartItems = savedNames.map((name, index) => [name, savedPrices[index]]);
    console.log(cartItems.length);
    this.setState({
      cartItems,
      quantidade: ((cartItems.length) ? cartItems.length : 0),
    });
  }

  render() {
    const { quantidade, cartItems } = this.state;
    return (
      (quantidade === 0)
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>
        : (
          <div>
            { cartItems.map((item) => (
              <div key={ item }>
                <hr />
                <RemoveItem />
                <p data-testid="shopping-cart-product-name">{item[0]}</p>
                <ItemQuantity itemPrice={ item[1] } />
              </div>
            ))}
            <hr />
            <p data-testid="shopping-cart-product-quantity">
              {quantidade}
            </p>
            <spam>Preço Total: </spam>
          </div>
        )
    );
  }
}

export default Cart;
