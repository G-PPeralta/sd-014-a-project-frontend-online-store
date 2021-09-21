import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = props;
    this.state = {
      product,
    };
  }

  render() {
    const { product } = this.state;
    const { attributes } = product;
    return (
      <div>
        <h1
          data-testid="product-detail-name"
        >
          {`${product.title} - $${product.price}`}
        </h1>
        <img src={ product.thumbnail } alt={ product.title } />
        <section className="specs-product">
          <h3>Especificações técnicas</h3>
          <ol>
            { attributes.map((attribute) => (
              <li key={ attribute.id }>
                {
                  `${attribute.name} - ${attribute.value_name ?? 'indefinido'}`
                }
              </li>
            )) }
          </ol>
        </section>
      </div>
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.objectOf(PropTypes.any).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
