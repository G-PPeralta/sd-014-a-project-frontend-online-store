import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import './styles/productCard.css';

export default class ProductCard extends React.Component {
  render() {
    const { product: { id, title, thumbnail, price } } = this.props;

    return (
      <div className="productCard" data-testid="product" id={ id }>
        <Link
          data-testid="product-detail-link"
          to={ `/product-details/${id}` }
        >
          <div className="productCardContent">
            <h2>{ title }</h2>
            <img src={ thumbnail } alt="Product Thumbnail" />
            <span>
              {
                `${price
                  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                }`
              }
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  key: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
