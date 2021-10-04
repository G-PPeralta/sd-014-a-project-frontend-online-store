import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addToCart, readCartItens, subFromCart } from '../services/AddToCart';
// Consulta: https://pt.stackoverflow.com/questions/78504/arredondando-um-n%C3%BAmero-decimal-para-um-n%C3%BAmero-decimal-mais-baixo

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    const {
      item: { quantidade = 1 },
    } = props;
    this.state = {
      quantidade,
    };
  }

  // handleDelete=() => {
  //   const { item } = this.props;
  //   this.updateState();
  // }

  handleDecrease = () => {
    const { item } = this.props;
    subFromCart(item);
    this.updateState();
  }

  handleIncrease = () => {
    const { item } = this.props;
    addToCart(item);
    this.updateState();
  }

  updateState = () => {
    const { item } = this.props;
    const readCart = readCartItens();
    const cartItem = readCart.find((i) => i.id === item.id);
    this.setState({
      quantidade: cartItem.quantidade,
    });
  }

  render() {
    const { item: { id, thumbnail, title, price, available_quantity: av } } = this.props;
    const { quantidade } = this.state;

    return (
      <div key={ id }>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ `Foto de ${title}` } />
        <p>
          {`Preço: R$${Math.floor(parseFloat(price * quantidade) * 100) / 100}`}

        </p>
        <p data-testid="shopping-cart-product-quantity">
          { quantidade }
        </p>
        <button
          disabled={ quantidade === 1 }
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.handleDecrease }
          style={ { color: 'red' } }
        >
          -
        </button>
        <button
          disabled={ quantidade === av }
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.handleIncrease }
          style={ { color: 'green' } }
        >
          +
        </button>
        <button
          type="button"
          style={ { color: 'red', fontWeight: '700' } }
          onClick={ this.handleDelete }
        >
          DELETE
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    condition: PropTypes.string,
    id: PropTypes.string,
    quantidade: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
};
