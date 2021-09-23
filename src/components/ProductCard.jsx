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
      quantity: 0,
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
        this.updatequantity(product.quantity);
      }
    }
  }

  componentDidUpdate() {
    const { quantity } = this.state;
    this.savetoLocalStorage(quantity);
  }

  updatequantity = (quantity) => this.setState({ quantity });
  // Can't use setState in componentDidMount

  savetoLocalStorage = (newQty) => {
    const {
      product: {
        id,
        title,
        thumbnail,
        price,
        available_quantity: availableQuantity,
      },
    } = this.props;
    const { quantity } = this.state;

    const savedProduct = {
      id,
      title,
      thumbnail,
      price,
      availableQuantity,
      quantity: newQty,
    };

    const storage = JSON.parse(localStorage.getItem(storageKey));

    if (quantity === 1) {
      if (storage) {
        const storageWithNewProduct = storage.filter((item) => item.id !== id);
        const newStorage = [...storageWithNewProduct, savedProduct];
        localStorage.setItem(storageKey, JSON.stringify(newStorage));
      } else {
        cartProducts.push(savedProduct);
        localStorage.setItem(storageKey, JSON.stringify(cartProducts));
      }
    } else {
      storage.forEach((item) => {
        if (item.id === id) item.quantity = newQty;
      });
      localStorage.setItem(storageKey, JSON.stringify(storage));
    }
  };

  addToCartBtn = () => {
    const { quantity } = this.state;
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
        <p>{`Quantidade: ${quantity}`}</p>
      </div>
    );
  };

  addToCartfunc = () => {
    const { shouldUpdateTotalProducts } = this.props;
    this.setState((prevState) => {
      const { quantity } = prevState;
      shouldUpdateTotalProducts();
      return { quantity: quantity + 1 };
    });
  };

  render() {
    const { quantity } = this.state;
    const {
      product: { title, thumbnail, price, id },
    } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <Link
          className="product-card-link"
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: {
              title,
              thumbnail,
              price,
              id,
              quantity,
            },
          } }
        >
          <h3 className="product-title">{title}</h3>
          <img alt={ title } className="product-thumbnail" src={ thumbnail } />
          <p>{`R$${price.toFixed(2)}`}</p>
          {/* <p>
            {`${price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}`}
          </p> */}
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
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  shouldUpdateTotalProducts: PropTypes.func.isRequired,
};
