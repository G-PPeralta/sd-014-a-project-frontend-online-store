import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

class ProductCard extends Component {
  render() {
    const { produto, addCartHandle } = this.props;
    return (
      <div data-testid="product" id="Card">
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
          <AddToCart
            addCartHandle={ addCartHandle }
            produto={ produto }
          />
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
