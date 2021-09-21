import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, thumbnail, price, address } = product;
    return (
      <div data-testid="product" className="card">
        <div>
          <img src={ thumbnail } alt={ title } className="img" />
        </div>
        <div className="card-container">
          <h4>{ title }</h4>
          <h5>{`R$${price}`}</h5>
          <p>{`De ${address.state_name}, ${address.city_name}`}</p>
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
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
