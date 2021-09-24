import React from 'react';
import '../services/localstorage';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0,
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.getCart = this.getCart.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  getCart() {
    const cart = localStorage.getObj('products');
    this.setState({
      cart,
    }, this.calculateTotal(cart));
  }

  calculateTotal(cart) {
    const total = Object.values(cart).reduce((acc, { product, quantity }) => {
      const { price } = product;
      return acc + (+price * quantity);
    }, 0);
    this.setState({
      total,
    });
  }

  render() {
    const { cart, total, fullname, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        <h2>Checkout</h2>
        { Object.values(cart).map(({ product, quantity }) => (
          <div key={ product.id }>
            <h2>{ product.title }</h2>
            <p>{ product.price }</p>
            <p>{ quantity }</p>
          </div>
        )) }
        <h3>Total</h3>
        <p>{ total }</p>
        <form>
          <fieldset>
            <input
              data-testid="checkout-fullname"
              value={ fullname }
              onChange={ this.handleChange }
              name="fullname"
            />
            <input
              data-testid="checkout-email"
              value={ email }
              onChange={ this.handleChange }
              name="email"
            />
            <input
              data-testid="checkout-cpf"
              value={ cpf }
              onChange={ this.handleChange }
              name="cpf"
            />
            <input
              data-testid="checkout-phone"
              value={ phone }
              onChange={ this.handleChange }
              name="phone"
            />
            <input
              data-testid="checkout-cep"
              value={ cep }
              onChange={ this.handleChange }
              name="cep"
            />
            <input
              data-testid="checkout-address"
              value={ address }
              onChange={ this.handleChange }
              name="address"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Checkout;
