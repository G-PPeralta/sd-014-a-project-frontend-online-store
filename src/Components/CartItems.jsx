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
      <div>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">
          {quantity}
        </p>
        <p>{price}</p>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            name="product-decrease-quantity"
            id={ id }
            onClick={ () => removeItem(item) }
          >
            -
          </button>
          <button
            type="button"
            data-testid="product-increase-quantity"
            name="product-increase-quantity"
            id={ id }
            onClick={ (e) => addItem(e, item) }
            disabled={ disabled }
          >
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
