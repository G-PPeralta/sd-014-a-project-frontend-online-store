import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

class CartProducts extends React.Component {
  render() {
    const { carrinho } = this.props;
    const cartList = carrinho.map((produto) => (
      <CartProduct
        key={ produto.id }
        produto={ produto }
      />
    ));

    return (
      <ul>
        { cartList }
      </ul>
    );
  }
}

CartProducts.propTypes = {
  carrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartProducts;
