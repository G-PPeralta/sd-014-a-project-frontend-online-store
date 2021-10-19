import React from 'react';
import PropTypes from 'prop-types';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);

    this.goToCheckout = this.goToCheckout.bind(this);
    this.cleanStorage = this.cleanStorage.bind(this);
  }

  goToCheckout() {
    const { history } = this.props;
    history.push('/checkout');
  }

  cleanStorage() {
    localStorage.setItem('cartList', JSON.stringify([]));
  }

  render() {
    const storage = JSON.parse(localStorage.getItem('cartList'));
    return (
      <main>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <button
          type="button"
          onClick={ this.cleanStorage }
        >
          Limpar carrinho
        </button>
        <ul>
          {storage.map((product) => (
            <li
              key={ product.id }
              data-testid="shopping-cart-product-name"
            >
              { product.title }
            </li>))}
        </ul>
        <p data-testid="shopping-cart-product-quantity">{storage.length}</p>
        <button
          type="button"
          onClick={ this.goToCheckout }
          data-testid="checkout-products"
        >
          Comprar
        </button>
      </main>
    );
  }
}

ShopCart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ShopCart;
