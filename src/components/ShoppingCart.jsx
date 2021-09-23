import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  renderQuantityButton = (operation) => (
    <button
      type="button"
      data-testid={ `product-${operation}-quantity` }
      onClick={ this.handleClick }
    >
      { (operation === 'decrease' ? '-' : '+') }
    </button>
  );

  render() {
    const { cartProduct } = this.props;
    if (cartProduct.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        {cartProduct.map((product) => (
          <div key={ product.id }>
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ `R$ ${product.price.toFixed(2)}` }</p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
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
