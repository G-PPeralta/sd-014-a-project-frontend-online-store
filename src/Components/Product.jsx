import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <p><img src={ thumbnail } alt={ title } /></p>
        <p>{ price }</p>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default Product;
