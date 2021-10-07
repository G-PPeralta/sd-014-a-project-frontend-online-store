import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { cart, handleAddToCart } = this.props;
    const DECREASE_BY_ONE = -1;
    return (
      <section>
        <h1>Carrinho de compras</h1>
        { cart.length !== 0
          ? (
            <ul>
              { cart.map((product) => (
                <li key={ product.id }>
                  <span data-testid="shopping-cart-product-quantity">
                    { product.qty }
                  </span>
                  <span data-testid="shopping-cart-product-name">
                    { product.title }
                  </span>
                  <span>{ product.price }</span>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => handleAddToCart(product) }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={
                      () => handleAddToCart(product, DECREASE_BY_ONE)
                    }
                  >
                    -
                  </button>
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
  handleAddToCart: PropTypes.func.isRequired,
};

export default Cart;
