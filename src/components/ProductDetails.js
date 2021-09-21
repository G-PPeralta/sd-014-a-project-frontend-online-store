import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  toCart = () => {
    const { location: { state: { product } } } = this.props;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) { // carrinho já existe
      for (let i = 0; i < currentCart.length; i += 1) {
        if (currentCart[i].productId === product.id) { // se item existe, quantity + 1
          currentCart[i].quantity += 1;
          localStorage.setItem('cart', JSON.stringify(currentCart));
          return;
        }
      } // se item não existir, adiciona no carrinho
      const newProduct = { productObj: product, quantity: 1, productId: product.id };
      localStorage.setItem('cart', JSON.stringify([...currentCart, newProduct]));
    } else { // carrinho vazio, cria array com item
      const newProduct = [{ productObj: product, quantity: 1, productId: product.id }];
      localStorage.setItem('cart', JSON.stringify(newProduct));
    }
  }

  render() {
    const { location: { state: { product } } } = this.props;

    return (
      <div>
        <p data-testid="product-detail-name">
          { product.title }
        </p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.toCart }
        >
          +
        </button>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
