import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section>
        { products.map(({ title, price, thumbnail, id }) => (<ProductCard
          key={ id }
          title={ title }
          price={ price }
          thumbnail={ thumbnail }
        />))}
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default ProductList;
