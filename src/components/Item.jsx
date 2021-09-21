import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    const { location } = this.props;
    const { product } = location.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
      </div>
    );
  }
}

Item.propTypes = {
  location: PropTypes.string,
}.isRequired;

export default Item;
