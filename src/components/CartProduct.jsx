import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saver } from '../services/StorageServices';

export class CartProduct extends Component {

  render() {
    const { produto, contador, onClick } = this.props;
    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">
          { produto.title }
        </h2>
        <img src={ produto.thumbnail } alt="" className="ProdImg" />
        <p>{produto.price}</p>
        <button
          type="submit"
          data-testid="product-increase-quantity"
          onClick={ onClick(produto.id, contador) }
        >
          +
        </button>
        <button type="submit" data-testid="product-decrease-quantity"> - </button>
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
  addCartHandle: PropTypes.func.isRequired,
};
export default CartProduct;
