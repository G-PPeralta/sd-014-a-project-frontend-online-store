import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <ProductCard
            title={ product.title }
            price={ product.price }
            thumbnail={ product.thumbnail }
            key={ product.id }
            category={ product.category_id }
            id={ product.id }
          />
        )) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
