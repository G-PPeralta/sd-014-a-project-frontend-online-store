import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <main>
        {products}
      </main>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.objectOf(PropTypes.any).isRequired,
};
