import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, offCart } = this.props;
    return (
      <section className="d-flex flex-wrap">
        { products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          offCart={ offCart }
        />))}
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default ProductList;
