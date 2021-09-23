import React from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  componentDidMount() {
    this.handleDisabled();
  }

  handleDisabled = () => {
    const { quantity, maxQuant } = this.props;
    if (quantity === maxQuant) {
      this.setState({ disabled: true });
    }
  }

  render() {
    const {
      thumbnail,
      title,
      quantity,
      price,
      id,
      removeItem,
      addItem,
      item,
    } = this.props;
    const { disabled } = this.state;
    return (
      <div
        className="d-flex
       flex-row align-items-center
       justify-content-evenly div-item-cart-card
       m-1"
      >
        <div className="cart-item-img">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="cart-item-title">
          <p data-testid="shopping-cart-product-name">{title}</p>
        </div>
        <div className="d-flex flex-row">
          <span>Qtd: </span>
          <span data-testid="shopping-cart-product-quantity">
            {quantity}
          </span>
        </div>
        <div className="cart-item-price">
          <span>R$</span>
          <span>{price}</span>
        </div>
        <div className="d-flex cart-item-button justify-content-around">
          <button
            className="btn"
            type="button"
            data-testid="product-decrease-quantity"
            name="product-decrease-quantity"
            id={ id }
            onClick={ () => removeItem(item) }
          >
            <i className="fas fa-minus" />
            -
          </button>
          <button
            className="btn"
            type="button"
            data-testid="product-increase-quantity"
            name="product-increase-quantity"
            id={ id }
            onClick={ (e) => addItem(e, item) }
            disabled={ disabled }
          >
            <i className="fas fa-plus" />
            +
          </button>
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  maxQuant: PropTypes.number.isRequired,
};
