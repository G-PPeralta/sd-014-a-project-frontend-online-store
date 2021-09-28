import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductReviewForm from './ProductReviewForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
    };
  }

  handleClick = () => {
    const { location: { state } } = this.props;
    this.addtocart(state);
  }

  addtocart = (product) => {
    const { cartProducts } = this.state;
    if (cartProducts.includes(product)) {
      return (alert('Produto já adicionado'));
    }
    this.setState((previousState) => ({
      cartProducts: [...previousState.cartProducts, product],
    }));
    this.exportCart(product);
  }

  exportCart = (product) => {
    const { takeCartProduct } = this.props;
    takeCartProduct(product);
  }

  render() {
    const { location } = this.props;
    const { state: { title, price, thumbnail } } = location;
    return (
      <div>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleClick() }
        >
          Adicionar ao carrinho
        </button>
        <ProductReviewForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  takeCartProduct: PropTypes.func.isRequired,
};

export default ProductDetails;
