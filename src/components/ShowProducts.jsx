import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addToCart, getNumberOfProductsInCart } from '../services/AddToCart';
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
      <>
        <p key={ product.id } data-testid="product">
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
        <div className="carQtd">
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ () => this.handleCart(product) }
          >
            Add to Cart
          </button>
        </div>
      </>
    ));
  }

  render() {
    const { itemsInCart } = this.state;
    const { products } = this.props;
    return (
      <>
        <div className="carQtd">
          <Link
            to="/card"
            className="btn btn-primary"
            data-testid="shopping-cart-button"
          >
            <img
              className="btn-primary"
              alt="shopping-cart"
              src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
            />
          </Link>
          <TotalyProduct itemsInCart={ itemsInCart } />
        </div>
        <div>{this.showProducts(products)}</div>
      </>
    );
  }
}

ShowProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
