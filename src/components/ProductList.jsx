import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section className="d-flex">
        {products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default ProductList;
