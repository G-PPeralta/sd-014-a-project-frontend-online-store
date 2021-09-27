import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CartProduct extends Component {
  render() {
    const { produto, contador, clickHandler } = this.props;
    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">
          { produto.title }
        </h2>
        <img src={ produto.thumbnail } alt="" className="ProdImg" />
        <p>{produto.price}</p>
        <button
          type="submit"
          value="+"
          data-testid="product-increase-quantity"
          onClick={ ({ target }) => clickHandler(produto, target) }
        >
          +
        </button>
        <button
          type="submit"
          value="-"
          data-testid="product-decrease-quantity"
          onClick={ ({ target }) => clickHandler(produto, target) }
        >
          -
        </button>
        <button type="submit">Remover</button>
        <p data-testid="shopping-cart-product-quantity">{ contador }</p>
      </div>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  contador: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default CartProduct;
