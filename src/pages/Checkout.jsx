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
    <div>
      {localStorage.setItem('totalPrice', 0)}
      {cartList.map((item) => {
        const totalProductPrice = item.quant * item.price;
        this.updatePrice(totalProductPrice);
        console.log(totalProductPrice);
        return <ChekoutItems key={ item.id } product={ item } />;
      })}
      <h2>{`Total: R$${JSON.parse(localStorage.getItem('totalPrice')).toFixed(2)}`}</h2>
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

      <div>
        {cartList && this.renderCartList(cartList)}
        <ChekoutForm />
      </div>

    );
  }
}

export default Checkout;
