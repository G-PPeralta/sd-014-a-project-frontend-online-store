import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state; // https://cursos.alura.com.br/forum/topico-this-props-location-query-em-novas-versoes-48309
  }

  render() {
    const { title, thumbnail, price } = this.state;

    return (
      <div data-testid="product-detail-name">
        <h3>{title}</h3>
        <img alt={ title } className="product-thumbnail" src={ thumbnail } />
        <p>{`R$${price.toFixed(2)}`}</p>
      </div>);
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetail;
