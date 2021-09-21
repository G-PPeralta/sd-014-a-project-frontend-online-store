import React, { Component } from 'react';

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
    if (!JSON.parse(localStorage.getItem('setCart'))) {
      localStorage.setItem('setCart', JSON.stringify([]));
    }
    const savedCart = JSON.parse(localStorage.getItem('setCart'));
    this.setState({
      cartItems: savedCart,
      quantidade: ((savedCart.length) ? savedCart.length : 0),
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
                <p data-testid="shopping-cart-product-name">{item}</p>
                <p data-testid="shopping-cart-product-quantity">{item.length}</p>
              </div>
            ))}
          </div>
        )
    );
  }
}

export default Cart;
