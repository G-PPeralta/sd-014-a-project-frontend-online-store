import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends React.Component {
  render() {
    const { itemInfo: { content, amount } } = this.props;

    return (
      <div>
        <img src={ content.thumbnail } alt={ content.title } />
        <h3 data-testid="shopping-cart-product-name">{ content.title }</h3>
        <p>{ content.price }</p>
        <button type="button">+</button>
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
        <button type="button">-</button>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  itemInfo: PropTypes.shape({
    content: PropTypes.objectOf(PropTypes.object),
    amount: PropTypes.number,
  }),
}.isRequired;

export default ShoppingCartItem;
