import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

export default CartItem;
