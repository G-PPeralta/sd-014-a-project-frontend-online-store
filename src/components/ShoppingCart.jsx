import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);

    this.state = {
      productQuantity: {},
    };
  }

  quantityButton = (operation, manipulator) => (
    <button
      type="button"
      data-testid={ `product-${operation}-quantity` }
      onClick={ manipulator }
      name={ operation }
    >
      { (operation === 'decrease' ? '-' : '+') }
    </button>
  );

  addProduct(id) {
    const { productQuantity } = this.state;
    productQuantity[id] += 1;
    console.log(productQuantity);
  }

  removeProduct(id) {
    const { productQuantity } = this.state;
    productQuantity[id] -= 1;
    console.log(productQuantity);
  }

  updateProductQuantity(id) {
    const { productQuantity } = this.state;
    productQuantity[id] = 1;
    console.log(productQuantity);
  }

  render() {
    const { cartProduct } = this.props;
    const { productQuantity } = this.state;
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
            { this.updateProductQuantity(product.id) }
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ `R$ ${product.price.toFixed(2)}` }</p>
            { this.quantityButton('decrease', () => this.removeProduct(product.id)) }
            <p data-testid="shopping-cart-product-quantity">
              { productQuantity[product.id] }
            </p>
            { this.quantityButton('increase', () => this.addProduct(product.id)) }
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
