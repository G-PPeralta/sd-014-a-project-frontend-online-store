import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

class Header extends React.Component {
  // constructor() {
  // const cartStorage = JSON.parse(localStorage.getItem('carrinho'));
  // super();
  // this.state = {
  //   storage: cartStorage,
  // };

  // this.productQuantity = this.productQuantity.bind(this);
  // }

  // productQuantity() {
  //   const { storage } = this.state;
  //   const quant = storage.reduce((quantidade, soma) => quantidade + soma.quantity, 0);
  //   return quant;
  // }

  render() {
    return (
      <div className="home">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/checkout">
          <p>Pedidos</p>
        </Link>
        <ShoppingCartIcon cart="" />
      </div>
    );
  }
}

export default Header;
