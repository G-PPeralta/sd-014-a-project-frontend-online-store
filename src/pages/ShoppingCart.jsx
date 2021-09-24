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

  loadCart() {
    this.setState({
      products: JSON.parse(localStorage.getItem('products')),
    });
  }

  render() {
    const { products, quantity, price } = this.state;
    if (products.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        {products.map((product) => (
          <CartItem
            key={ product.id }
            product={ product }
          />
        ))}
        <button type="button">
          X
        </button>
        <p>
          { `Total: R$${price * quantity}`}
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
