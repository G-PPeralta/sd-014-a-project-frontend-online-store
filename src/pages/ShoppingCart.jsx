import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCartCard from '../components/ProductCartCard';
import { getCartProductsAndQuantity, productsSave } from '../services/local';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItens: [],
      itensQuantity: {},
    };
    this.getItens = this.getItens.bind(this);
    this.loadCart = this.loadCart.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRmv = this.handleRmv.bind(this);
    this.renderPrice = this.renderPrice.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    this.getItens();
  }

  handleAdd({ target }) {
    const { cartItens, itensQuantity } = this.state;
    const { name } = target;
    const quantity = itensQuantity;
    if (itensQuantity[name] > 1) {
      quantity[name] += 1;
      this.setState({ itensQuantity: quantity });
      productsSave(cartItens, quantity);
    }
  }

  handleRmv({ target }) {
    const { cartItens, itensQuantity } = this.state;
    const { name } = target;
    const quantity = itensQuantity;
    if (itensQuantity[name] > 1) {
      quantity[name] -= 1;
      this.setState({ itensQuantity: quantity });
      productsSave(cartItens, quantity);
    }
  }

  handleRedirect() {
    const { history } = this.props;
    history.push('/payment');
  }

  getItens() {
    const cartInformation = getCartProductsAndQuantity();
    this.setState({ cartItens: cartInformation[0], itensQuantity: cartInformation[1] });
  }

  loadCart() {
    const { itensQuantity, cartItens } = this.state;
    return (
      <div>
        <div>
          {cartItens.map((product) => (<ProductCartCard
            key={ product.id }
            product={ product }
            quantity={ itensQuantity[product.id] }
            handleAdd={ this.handleAdd }
            handleRmv={ this.handleRmv }
          />))}
        </div>
        <div>
          <h3>{`O Valor total é:${this.renderPrice()}`}</h3>
        </div>
        <div>
          <button
            type="button"
            data-testid="checkout-products"
            onClick={ this.handleRedirect }
          >
            Finalizar compra
          </button>
        </div>
      </div>
    );
  }

  renderPrice() {
    const { itensQuantity, cartItens } = this.state;
    const novoObjt = cartItens.reduce((acc, item) => {
      acc += item.price * itensQuantity[item.id];
      return acc;
    }, 0);
    const result = Math.round(novoObjt * 100) / 100;
    return result;
  }

  render() {
    const { cartItens } = this.state;
    return (
      <div>
        {cartItens ? this.loadCart()
          : (<h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
