import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

const cartProducts = [];

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      productQty: 0,
    };
  }

  componentDidMount() {
    JSON.parse(localStorage.getItem('cart-products'));
  }

  componentDidUpdate() {
    this.savetoLocalStorage();
  }

  savetoLocalStorage=() => {
    const { productQty } = this.state;
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    const savedProduct = { title, thumbnail, price, productQty };
    cartProducts.push(savedProduct);
    localStorage.setItem('cart-products', JSON.stringify(cartProducts));
  }

  addToCartBtn= () => {
    const { productQty } = this.state;
    return (
      <div>
        <button
          className="add-cart-btn"
          data-testid="product-add-to-cart"
          onClick={ this.addToCartfunc }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <p>
          {`Qtd: ${productQty}`}
        </p>
      </div>
    );
  }

  addToCartfunc= () => {
    this.setState((prev) => ({ productQty: prev.productQty + 1 }));
  }

  render() {
    const {
      product: { title, thumbnail, price },
    } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <h3
          className="product-title"
        >
          {title}
        </h3>
        <img alt={ title } className="product-thumbnail" src={ thumbnail } />
        <p>{`R$${price.toFixed(2)}`}</p>
        {this.addToCartBtn()}
      </div>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
