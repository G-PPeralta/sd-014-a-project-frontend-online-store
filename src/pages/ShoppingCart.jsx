import React, { Component } from 'react';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      quantity: 1,
    };
    this.loadCart = this.loadCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  componentDidMount() {
    this.loadCart();
  }

  handleChange({ target }) {
    const { value } = target;
    if (value < 0) {
      this.setState({ quantity: 0 });
    } else { this.setState({ quantity: value }); }
  }

  increaseQuantity(quantity) {
    quantity += 1;
    // } if (target.quantity < 0) { target.quantity = 0; }
    // this.setState({ quantity: amount });
  }

  decreaseQuantity(quantity) {
    if (quantity < 0) { quantity = 0; }
    quantity -= 1;
  }

  loadCart() {
    this.setState({
      products: JSON.parse(localStorage.getItem('products')),
    });
  }

  render() {
    const { products, quantity } = this.state;
    if (products.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        {products.map((product) => (
          <CartItem
            key={ product.id }
            product={ product }
            increaseQuantity={ this.increaseQuantity }
            decreaseQuantity={ this.decreaseQuantity }
          />
        ))}
        <button type="button">
          X
        </button>
        <p>
          { `Total: R$${products.price * quantity}`}
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
