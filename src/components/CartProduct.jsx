import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartProduct extends Component {
  render() {
    const { produto } = this.props;
    const { title, price, thumbnail } = produto;
    //  console.log(produto);

    return (
      <li className="produto-container">
        <div className="image-container">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="text-container">
          <h2 className="price">
            { `R$  ${price}` }
          </h2>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <br />
          <h3 data-testid="shopping-cart-product-quantity">1</h3>
          <h3>Unidade(s)</h3>
        </div>
      </li>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
};

export default CartProduct;
