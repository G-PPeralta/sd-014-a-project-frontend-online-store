import React from 'react';
import PropTypes from 'prop-types';

class CartList extends React.Component {
  render() {
    const { location: { state: { cartList } } } = this.props;
    const produto = Object.keys(cartList);

    if (produto.length !== 0) {
      return (
        <div>
          {produto
            && produto.map((name, index) => (
              <>
                <p data-testid="shopping-cart-product-name" key={ name }>
                  {name}
                </p>
                <p data-testid="shopping-cart-product-quantity" key={ name + index }>
                  { cartList[name] }
                </p>
              </>
            ))}
        </div>
      );
    }
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }
}

CartList.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartList: PropTypes.objectOf(PropTypes.number),
    }),
  }).isRequired,
};

export default CartList;
