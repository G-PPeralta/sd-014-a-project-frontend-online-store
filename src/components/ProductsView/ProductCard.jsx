import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const {
      produto: { id, title, thumbnail, price },
    } = this.props;

    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/product-details/${id}`,
          state: { title, thumbnail, price },
        } }
      >
        <div data-testid="product" id={ id }>
          <h2>{title}</h2>
          <img src={ thumbnail } alt="Produto" />
          <p>
            {`${price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}`}
          </p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
