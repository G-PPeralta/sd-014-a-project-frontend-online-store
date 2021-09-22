import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

const cartProducts = [];
const storageKey = 'cart-products';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      productQty: 0,
    };
  }

  componentDidMount() {
    const {
      product: { id },
    } = this.props;
    const storage = JSON.parse(localStorage.getItem(storageKey));
    if (storage) {
      const product = storage.find((item) => item.id === id);
      if (product) {
        this.updateProductQty(product.productQty);
      }
    }
  }

  componentDidUpdate() {
    const { productQty } = this.state;
    this.savetoLocalStorage(productQty);
  }

  updateProductQty = (productQty) => this.setState({ productQty });
  // Can't use setState in componentDidMount

  savetoLocalStorage = (newQty) => {
    const {
      product: { id, title, thumbnail, price },
    } = this.props;
    const { productQty } = this.state;

    const savedProduct = { id, title, thumbnail, price, productQty: newQty };

    const storage = JSON.parse(localStorage.getItem(storageKey));

    if (productQty === 1) {
      if (storage) {
        const newStorage = [...storage, savedProduct];
        localStorage.setItem(storageKey, JSON.stringify(newStorage));
      } else {
        cartProducts.push(savedProduct);
        localStorage.setItem(storageKey, JSON.stringify(cartProducts));
      }
    } else {
      storage.forEach((item) => {
        if (item.id === id) item.productQty = newQty;
      });
      localStorage.setItem(storageKey, JSON.stringify(storage));
    }
  };

  addToCartBtn = () => {
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
        <p>{`Qtd: ${productQty}`}</p>
      </div>
    );
  };

  addToCartfunc = () => {
    this.setState((prev) => ({ productQty: prev.productQty + 1 }));
  };

  render() {
    const { productQty } = this.state;
    const {
      product: { title, thumbnail, price, id },
    } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: {
              title,
              thumbnail,
              price,
              id,
              productQty,
            },
          } }
        >
          <h3 className="product-title">{title}</h3>
          <img alt={ title } className="product-thumbnail" src={ thumbnail } />
          <p>{`R$${price.toFixed(2)}`}</p>
        </Link>
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
    id: PropTypes.string.isRequired,
  }).isRequired,
};
