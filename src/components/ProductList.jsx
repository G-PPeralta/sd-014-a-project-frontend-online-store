import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, offCart, handleQuantityButtonsClick } = this.props;
    return (
      <section className="d-flex flex-wrap">
        { products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          offCart={ offCart }
          handleQuantityButtonsClick={ handleQuantityButtonsClick }
        />))}
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  offCart: PropTypes.bool,
  handleQuantityButtonsClick: PropTypes.func,
}.isRequired;

export default ProductList;
