import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckProducts extends Component {
  sumOfCart = (products) => (
    products.reduce((total, prod) => (
      total + prod.product.price
    ), 0)
  )

  render() {
    const { props: { products } } = this;
    return (
      <section>
        <h3>Revise seus produtos</h3>
        <div>
          {products.map((prod) => (
            <div key={ prod.product.id }>
              <img src={ prod.product.thumbnail } alt={ prod.product.title } />
              <p>{ prod.product.title }</p>
              <p>{ prod.product.price }</p>
            </div>
          ))}
        </div>
        <p>
          Total: R$
          {this.sumOfCart(products)}
        </p>
      </section>
    );
  }
}

CheckProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CheckProducts;
