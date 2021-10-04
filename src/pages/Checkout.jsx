import React, { Component } from 'react';
import ChekoutForm from '../components/ChekoutForm';
import ChekoutItems from '../components/ChekoutItems';
import { readCartItems } from '../services/cartAPI';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartList: false,
    };
  }

  componentDidMount() {
    this.fetchCartItems();
  }

  renderCartList = (cartList) => (
    <div className="checkout-items rounded shadow">
      <h5>Revise seus produtos</h5>

      {localStorage.setItem('totalPrice', 0)}
      {cartList.map((item) => {
        const totalProductPrice = item.quant * item.price;
        this.updatePrice(totalProductPrice);
        return <ChekoutItems key={ item.id } product={ item } />;
      })}
      <h5>{`Total: R$${JSON.parse(localStorage.getItem('totalPrice')).toFixed(2)}`}</h5>
    </div>
  );

  updatePrice = (totalPrice) => {
    const totalStorage = JSON.parse(localStorage.getItem('totalPrice'));
    // console.log(totalStorage);
    localStorage.setItem('totalPrice', totalStorage + totalPrice);
  };

  fetchCartItems() {
    const cartList = readCartItems();
    this.setState({ cartList });
  }

  render() {
    const { cartList } = this.state;

    return (

      <div className="d-flex flex-column align-items-center p-4">

        {cartList && this.renderCartList(cartList)}

        <ChekoutForm />
      </div>

    );
  }
}

export default Checkout;
