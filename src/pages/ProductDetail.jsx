import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductDetail.css';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.location.state,
    // https://cursos.alura.com.br/forum/topico-this-props-location-query-em-novas-versoes-48309
    };
  }

  render() {
    const {
      product: { title, thumbnail, price },
    } = this.state;

    return (
      <div className="product-detail" data-testid="product-detail-name">
        <h3>{title}</h3>
        <img alt={ title } className="product-thumbnail" src={ thumbnail } />
        <p>{`R$${price.toFixed(2)}`}</p>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;
