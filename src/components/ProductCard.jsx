import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BagPlusFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  handleClick(title) {
    localStorage.setItem('meuGato', title);
  }

  render() {
    const {
      product: { title, thumbnail, price, id },
    } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: this.props,
          } }
        >
          <h2>{title}</h2>
        </Link>
        <img src={ thumbnail } alt={ `foto do produto ${title}` } />
        <h2>{`preço: ${price}`}</h2>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={ this.handleClick }
        >
          <BagPlusFill />
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
