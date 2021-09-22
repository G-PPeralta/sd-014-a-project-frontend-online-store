import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity,
    };
  }

  quantityHandler = ({ target }, id) => {
    const { name } = target;
    const { quantity } = this.state;
    const { setQuantity } = this.props;
    const min = quantity === 1 && name === 'subtract';
    const value = name === 'add' ? quantity + 1 : quantity - 1;
    this.setState({ quantity: min ? 1 : value }, () => {
      const { state } = this;
      setQuantity(state.quantity, id);
    });
  }

  render() {
    const { title, thumbnail, price, removeItem, id } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$: ${price.toFixed(2) * quantity}` }</p>
        <button
          type="button"
          onClick={ (event) => this.quantityHandler(event, id) }
          name="subtract"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
        <button
          type="button"
          onClick={ (event) => this.quantityHandler(event, id) }
          name="add"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <br />
        <button type="button" onClick={ () => removeItem(id) }>
          Remover
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItem;
