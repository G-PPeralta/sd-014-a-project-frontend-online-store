import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const {
      products,
      inHome,
      handleQuantityButtonsClick,
      actualizeQuantity,
    } = this.props;
    return (
      <ul className="d-flex flex-wrap m-auto">
        { products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          inHome={ inHome }
          handleQuantityButtonsClick={ handleQuantityButtonsClick }
          actualizeQuantity={ actualizeQuantity }
        />))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  inHome: PropTypes.bool,
  handleQuantityButtonsClick: PropTypes.func,
}.isRequired;

export default ProductList;
