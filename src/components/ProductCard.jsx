import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, thumbnail, price, address, id,
      shipping } = product;
    const freeShipping = shipping.free_shipping;
    return (
      <div data-testid="product" className="card">
        <Link data-testid="product-detail-link" to={ `product/${id}` }>
          <div>
            <img src={ thumbnail } alt={ title } className="img" />
          </div>
          <div className="card-container">
            <h4>{ title }</h4>
            <h5>{`R${price}`}</h5>
            <p>{`De ${address.state_name}, ${address.city_name}`}</p>
            {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
          </div>
        </Link>
        <div>
          <button
            type="submit"
            id={ JSON.stringify(product) }
            data-testid="product-add-to-cart"
            onClick={ onClick }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
    address: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
