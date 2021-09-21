import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarrinhoBt from '../components/CarrinhoBt';
import ReviewForm from '../components/Review';

class Detalhes extends Component {
  render() {
    const { location: { state: { infoProduto } } } = this.props;

    return (
      <main>
        <CarrinhoBt />
        <img src={ infoProduto.thumbnail } alt={ infoProduto.title } />
        <h1 data-testid="product-detail-name">
          { infoProduto.title }
        </h1>
        <h2>{ infoProduto.price }</h2>
        <p>especificação técnica</p>
        <ReviewForm />
      </main>
    );
  }
}

Detalhes.propTypes = {
  location: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
};

export default Detalhes;
