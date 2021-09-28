import React from 'react';
import PropTypes from 'prop-types';

class CartProduct extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  handleClick({ target }) {
    if (target.name === 'decrease') {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    } else {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
    }
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

  render() {
    const { productInfo } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{productInfo.title}</p>
        <img src={ productInfo.thumbnail } alt={ productInfo.title } />
        <p>{ `R$ ${productInfo.price.toFixed(2)}` }</p>
        { this.quantityButton('decrease', this.handleClick) }
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
        { this.quantityButton('increase', this.handleClick) }
      </div>
    );
  }
}

CartProduct.propTypes = {
  productInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CartProduct;
