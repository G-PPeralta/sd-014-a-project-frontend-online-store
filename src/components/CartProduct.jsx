import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class CartProduct extends Component {
  render() {
    const { produto } = this.props;
    return (
      <div id="Card">
        <h2 data-testid="shopping-cart-product-name">
          { produto.title }
        </h2>
        <img src={ produto.thumbnail } alt="" className="ProdImg" />
        <p>{produto.price}</p>
        <button type="submit"> + </button>
        <button type="submit"> - </button>
        <button type="submit">Remover</button>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  // contador: PropTypes.objectOf(
  //   PropTypes.any,
  // ).isRequired,
};
export default CartProduct;
