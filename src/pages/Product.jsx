import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addProduct } from '../services/localStorage';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Product extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = props;
    this.state = {
      product,
    };
  }

  componentDidMount() {
    getProductsFromCategoryAndQuery();
  }

  handleClick = () => {
    const { product } = this.state;
    addProduct(product);
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
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
          className="cart-link"
        >
          Carrinho
        </Link>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
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
