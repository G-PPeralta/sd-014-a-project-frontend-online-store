import React from 'react';
import { Redirect } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';
import '../style/Purchase.css';

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
    const { cart } = this.state;
    return (
      <div className="d-flex flex-wrap overflow-auto flex-wrap items-div m-1">
        {cart.map((item) => (
          <div
            key={ item.productObj.id }
            className="d-flex
            flex-row
             item-div
             m-1 justify-content-evenly
             align-items-center"
          >
            <div>
              <img
                src={ item.productObj.thumbnail }
                alt="item"
                className="checkout-img"
              />
            </div>
            <div className="checkout-title">
              <p>
                {item.productObj.title}
              </p>
            </div>
            <div>
              <span>Quantidade: </span>
              <span>
                {item.quantity}
              </span>
            </div>
            <div>
              <span>R$</span>
              <span>
                {item.productObj.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  retrieveCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const totalPrice = this.calculateTotalPrice(cartItems);
    this.setState({ cart: cartItems, totalPrice });
  }

  render() {
    const
      {
        email,
        fullname,
        phone,
        cep,
        cpf,
        address,
        paymentOk,
        totalPrice,
      } = this.state;
    if (paymentOk === true) return <Redirect to="/" />;
    return (
      <div className="d-flex flex-column align-items-center">
        <h3 className="text-center header">Revise sua compra</h3>
        { this.renderCart() }
        <div className="text-center">
          <div>
            <span>TOTAL: R$</span>
            <span>
              {totalPrice}
            </span>
          </div>
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
      </div>
    );
  }
}
