import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TotalyProduct extends Component {
  render() {
    const { itemsInCart } = this.props;
    return (
      <div>
        <div data-testid="shopping-cart-size" className="total-products">
          <p>{itemsInCart}</p>
        </div>
      </div>
    );
  }
}

TotalyProduct.propTypes = {
  itemsInCart: PropTypes.number.isRequired,
};
