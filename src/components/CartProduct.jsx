import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddCarrinho.css';

class CartProduct extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeQuantity(operacao) {
    const { quantity } = this.state;
    if (operacao === '+') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
    }
    if (operacao === '-' && quantity >= 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  }

  deleteItem() {
    const { produto, metodo } = this.props;
    const storage = JSON.parse(localStorage.getItem('cart'));
    const produtoId = (storage.find((each) => each.id === produto.id));
    const index = storage.indexOf(produtoId);
    storage.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storage));
    metodo();
  }

  render() {
    const { produto } = this.props;
    const { title, price, thumbnail } = produto;
    const { quantity } = this.state;

    return (
      <li className="produto-container">
        <div className="image-container">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="text-container">
          <h2 className="price">
            { `R$  ${price}` }
          </h2>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <br />
          <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
          <h3>Unidade(s)</h3>
          <div className="btn-container-cart">
            <button
              className="bt-container"
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.changeQuantity('+') }
            >
              +
            </button>
            <button
              className="bt-container"
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.changeQuantity('-') }
            >
              -
            </button>
            <button
              className="bt-container"
              type="button"
              onClick={ this.deleteItem }
            >
              x
            </button>
          </div>
        </div>
      </li>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
  metodo: PropTypes.func.isRequired,
};

export default CartProduct;
