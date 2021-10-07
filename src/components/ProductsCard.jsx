import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnAddCart from './BtnAddCart';
import FreeShipping from './FreeShipping';

class ProductsCard extends Component {
  render() {
    const {
      product: { title, price, thumbnail, available_quantity: available, shipping },
      id,
      query,
      categoryId,
      onClick,
    } = this.props;
    return (
      <li data-testid="product">
        <Link
          to={ `/product-details/${id}&${query}&${categoryId}` }
          data-testid="product-detail-link"
        >
          <h1>{ title }</h1>
          <img src={ thumbnail } alt={ `${title}_image` } />
          <p>{ price }</p>
        </Link>
        <BtnAddCart
          title={ title }
          price={ +price }
          thumbnail={ thumbnail }
          id={ id }
          source="product"
          onClick={ onClick }
          quantity={ available }
        />
        { shipping.free_shipping && <FreeShipping />}
      </li>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    available_quantity: PropTypes.number.isRequired,
    shipping: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductsCard;
