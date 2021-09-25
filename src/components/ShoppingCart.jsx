import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);

    this.state = {
      productQuantity: [{}],
    };
  }

  updateProductQuantity(id) {
    const { productQuantity } = this.state;
    const allProducts = productQuantity[0];
    allProducts[id] = 1;
    console.log(productQuantity);
  }

  addProduct(id) {
    const { productQuantity } = this.state;
    console.log(productQuantity);
  }

  removeProduct(id) {
    const { productQuantity } = this.state;
    console.log(productQuantity);
  }

  renderQuantityButton = (operation, manipulator) => (
    <button
      type="button"
      data-testid={ `product-${operation}-quantity` }
      onClick={ manipulator }
      name={ operation }
    >
      { (operation === 'decrease' ? '-' : '+') }
    </button>
  );

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
            { this.renderQuantityButton('decrease', this.removeProduct) }
            <p data-testid="shopping-cart-product-quantity">
              { productQuantity[0][product.id] }
            </p>
            { this.renderQuantityButton('increase', this.addProduct) }
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
