import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

class Cart extends React.Component {
  render() {
    const { cartItems, deleteCart } = this.props;
    console.log(cartItems);
    if (cartItems !== undefined && cartItems !== null && cartItems.length > 0) {
      return (
        <section>
          <Link to="/"><AiFillHome color="green" /></Link>
          <button type="button" onClick={ deleteCart }>Apagar Todos</button>
          {cartItems.map((item) => <CartCard key={ item.id } product={ item } />)}
        </section>
      );
    }
    return (
      <section>
        <Link to="/"><AiFillHome color="green" /></Link>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </section>
    );
  }
}

export default Cart;
