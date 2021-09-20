import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  freeShip = () => <p data-testid="free-shipping">Frete Grátis</p>

  render() {
    const { product: { title, thumbnail, price } } = this.props;
    const { shipping: { free_shipping: freeShipping } } = this.props;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <p><img src={ thumbnail } alt={ title } /></p>
        <p>{ price }</p>
        {freeShipping && this.freeShip()}
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default Product;
