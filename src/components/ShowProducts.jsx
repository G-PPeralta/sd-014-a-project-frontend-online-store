import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addToCart, getNumberOfProductsInCart } from '../services/AddToCart';
import '../App.css';
import '../styles/products.css';
import TotalyProduct from './TotalyProduct';

export default class ShowProducts extends Component {
  constructor() {
    super();
    this.state = {
      itemsInCart: 0,
    };
  }

  componentDidMount() {
    this.updateItemsIncart();
  }

  updateItemsIncart =() => {
    const items = getNumberOfProductsInCart();
    this.setState({
      itemsInCart: items,
    });
  }

  handleCart = (item) => {
    addToCart(item);
    this.updateItemsIncart();
  };

  showProducts(API) {
    return API.map((product) => (
      <li key={ product.id } className="product">
        <p data-testid="product" className="product-name">
          {product.title}
        </p>
        <img src={ product.thumbnail } alt={ `Foto de ${product.title} ` } />
        <p>{`Preço: R$${product.price}`}</p>
        <Link
          to={ { pathname: `/details/${product.id}`, state: product } }
          data-testid="product-detail-link"
        >
          Details
        </Link>
        {product.shipping.free_shipping
        && <p data-testid="free-shipping">Frete Grátis</p>}
        <button
          className="carQtd"
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.handleCart(product) }
        >
          Add to Cart
        </button>
      </li>
    ));
  }

  render() {
    const { products } = this.props;
    const { itemsInCart } = this.state;

    return (
      <>
        <TotalyProduct itemsInCart={ itemsInCart } />
        <ul className="product-list">{this.showProducts(products)}</ul>
      </>
    );
  }
}

ShowProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
