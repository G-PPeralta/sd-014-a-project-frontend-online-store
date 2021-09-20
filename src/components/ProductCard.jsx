import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BagPlusFill } from 'react-bootstrap-icons';

export default class ProductCard extends Component {
  handleClick(title) {
    localStorage.setItem('meuGato', title);
  }

  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ `foto do produto ${title}` } />
        <h2>{ `preço: ${price}` }</h2>
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
  }).isRequired,
};
