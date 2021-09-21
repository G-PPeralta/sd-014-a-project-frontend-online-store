import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductPage extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <main>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{`R$${price}`}</p>
      </main>
    );
  }
}

ProductPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductPage;
