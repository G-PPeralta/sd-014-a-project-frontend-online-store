import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AddToCart } from './AddToCart';

class ProductCard extends Component {
  render() {
    const { produto, addCartHandle } = this.props;
    return (
      <div data-testid="product" className="Card">
        <div>
          <Link
            data-testid="product-detail-link"
            key={ produto.id }
            to={ `/products/${produto.category_id}/${produto.id}` }
          >
            <h4>{produto.title}</h4>
            <img src={ produto.thumbnail } alt="" className="ProdImg" />
            <p>{produto.price}</p>
          </Link>
          <div>
            <AddToCart
              addCartHandle={ addCartHandle }
              produto={ produto }
            />
          </div>
          <Link to="/checkout">
            <button
              data-testid="checkout-products"
              type="button"
            >
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  produto: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  addCartHandle: PropTypes.func.isRequired,
};

export default ProductCard;
