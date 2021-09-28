import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';

class ShoppingCart extends React.Component {
  render() {
    const { cartProduct } = this.props;
    if (cartProduct.length === 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    }
    return (
      <div>
        {cartProduct.map((product) => (
          <CartProduct productInfo={ product } key={ product.id } />
        ))}
        <Link to="/Checkout" data-testid="checkout-products">
          <button
            type="button"
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProduct: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
