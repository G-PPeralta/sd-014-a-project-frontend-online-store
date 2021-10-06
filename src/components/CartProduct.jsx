import React, { Component } from 'react';
import propTypes from 'prop-types';

const formatPrice = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtde: 1,
    };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.setState((prevState) => ({
      qtde: prevState.qtde - 1,
    }));
  }

  increase() {
    this.setState((prevState) => ({
      qtde: prevState.qtde + 1,
    }));
  }

  render() {
    const { item } = this.props;
    const { qtde } = this.state;
    return (
      <div className="cart-product" key={ item.id }>
        <p data-testid="shopping-cart-product-name">{item.id}</p>
        <div>
          <p className="price-product">{ formatPrice(item.price) }</p>
          <div className="btn-add-remove">
            <button
              type="button"
              onClick={ this.decrease }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">{ qtde }</p>
            <button
              type="button"
              onClick={ this.increase }
              data-testid="product-increase-quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CartProduct.propTypes = {
  item: propTypes.string,
}.isRequired;

export default CartProduct;
