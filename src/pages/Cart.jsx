import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <section>
        <h1>Carrinho de compras</h1>
        { cart.length !== 0
          ? (
            <ul>
              { cart.map(({ title, price, qty, productId }) => (
                <li key={ productId }>
                  <span data-testid="shopping-cart-product-name">{ title }</span>
                  <span data-testid="shopping-cart-product-quantity">{ qty }</span>
                  <span>{ price }</span>
                </li>
              )) }
            </ul>
          )
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
      </section>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;

