import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AddToCart } from './AddToCart';

class ProdutosPage extends Component {
  render() {
    const { addCartHandle, produto } = this.props;
    return (
      <div>
        <Link to="/shoppingCart">
          <button
            type="button"
            data-testid="shopping-cart-button"
            placeholder="carrinho"
          >
            carrinho
          </button>
        </Link>
        <div data-testid="product-detail-name">
          <h2>{produto.title}</h2>
          <img src={ produto.thumbnail } alt="" />
          <p>{produto.price}</p>
        </div>
        <div data-testid="product-detail-add-to-cart">
          <AddToCart
            addCartHandle={ addCartHandle }
            produto={ produto }
          />
        </div>
      </div>
    );
  }
}

ProdutosPage.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  addCartHandle: PropTypes.func.isRequired,
};

export default ProdutosPage;
