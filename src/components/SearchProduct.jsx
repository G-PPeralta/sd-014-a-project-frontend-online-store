import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class SearchProduct extends Component {
  searchProduct = (arrayProduct) => {
    if (arrayProduct.length !== 0) {
      return (
        <div>
          {arrayProduct.map((products) => (
            <CardProduct
              key={ products.id }
              title={ products.title }
              image={ products.thumbnail }
              price={ products.price }
              id={ products.id }
            />))}
        </div>
      );
    }
  }

  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        {this.searchProduct(arrayProduct)}
      </div>
    );
  }
}

SearchProduct.propTypes = {
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchProduct;
