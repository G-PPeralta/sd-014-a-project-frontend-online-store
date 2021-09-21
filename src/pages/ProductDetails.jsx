import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  render() {
    const { title, thumbnail, price } = this.state;
    console.log(this.state);
    return (
      <div>
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h3>
          { `R$${price}`}
        </h3>
        <button type="button"> Comprar </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
