import React from 'react';
import { Redirect } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';

export default class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalPrice: 0,
      email: '',
      phone: '',
      fullname: '',
      cpf: '',
      cep: '',
      address: '',
      payment: '',
      paymentOk: false,
    };
  }

  componentDidMount() {
    this.retrieveCart();
  }

  calculateTotalPrice = (cart) => {
    const totalPrice = cart.reduce((ac, e) => {
      ac += (e.productObj.price * e.quantity);
      return ac;
    }, 0);
    return totalPrice;
  }

  handleButton = () => {
    const { email, fullname, phone, cep, cpf, address, payment } = this.state;
    const MIN_LENGTH = 3;
    if (
      email.length >= MIN_LENGTH
      && fullname.length >= MIN_LENGTH
      && phone.length >= MIN_LENGTH
      && cep.length >= MIN_LENGTH
      && cpf.length >= MIN_LENGTH
      && address.length >= MIN_LENGTH
      && payment.length >= MIN_LENGTH
    ) {
      this.setState({ paymentOk: true }, () => {
        this.setState({
          email: '',
          phone: '',
          fullname: '',
          cpf: '',
          cep: '',
          address: '',
          payment: '',
          paymentOk: false,
        });
      });
    }
  }

  handlePayment = ({ target }) => {
    const { value } = target;
    this.setState({ payment: value });
  }

  handleInput = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: (value),
    });
  }

  renderCart = () => {
    const { cart, totalPrice } = this.state;
    return (
      <div>
        {cart.map((item) => (
          <div key={ item.productObj.id }>
            <p>
              {item.productObj.title}
            </p>
            <p>
              {item.quantity}
            </p>
            <p>
              {item.productObj.price}
            </p>
          </div>
        ))}
        { totalPrice }
      </div>
    );
  }

  retrieveCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const totalPrice = this.calculateTotalPrice(cartItems);
    this.setState({ cart: cartItems, totalPrice });
  }

  render() {
    const { email, fullname, phone, cep, cpf, address, paymentOk } = this.state;
    if (paymentOk === true) return <Redirect to="/" />;
    return (
      <div>
        { this.renderCart() }
        <PurchaseForm
          fullname={ fullname }
          email={ email }
          phone={ phone }
          cep={ cep }
          cpf={ cpf }
          address={ address }
          handleInput={ this.handleInput }
          handleButton={ this.handleButton }
          handlePayment={ this.handlePayment }
        />
      </div>
    );
  }
}
