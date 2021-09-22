import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class CartProduct extends Component {
  render() {
    const { produto, contador } = this.props;
    return (
      <div data-testid="shopping-cart-product-name" id="Card">
        <div data-testid="shopping-cart-product-name">
          {/* <Link
            key={ produto.id }
            to={ `/products/${produto.category_id}/${produto.id}` }
          > */}
          <h2 data-testid="shopping-cart-product-name">
            {produto.title}
          </h2>
          {/* </Link> */}
          <img src={ produto.thumbnail } alt="" className="ProdImg" />
          <p>{produto.price}</p>
          <button type="submit"> + </button>
          <button type="submit"> - </button>
          <button type="submit">Remover</button>
          <p data-testid="shopping-cart-product-quantity">{ contador }</p>
        </div>
      </div>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  contador: PropTypes.number.isRequired,
};
export default CartProduct;
