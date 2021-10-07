import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/products.css';

export default class TotalyProductHome extends Component {
  render() {
    const { itemsInCart } = this.props;
    return (
      <div>
        <div className="total-products">
          <p>{itemsInCart}</p>
        </div>
      </div>
    );
  }
}

TotalyProductHome.propTypes = {
  itemsInCart: PropTypes.number.isRequired,
};
