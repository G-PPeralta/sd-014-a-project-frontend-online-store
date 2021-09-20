import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: JSON.parse(localStorage.cartItems),
    };
    this.productCard = this.productCard.bind(this);
  }

  productCard(product) {
    const { title, quantity } = product;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <section>
        {cart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cart.map((product) => this.productCard(product))}
      </section>
    );
  }
}

export default Card;
