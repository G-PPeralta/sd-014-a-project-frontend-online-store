import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import '../styles/ProductDetail.css';

const cartProducts = [];

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.location.state,
      quantity: 0,
      reviews: [],
      // https://cursos.alura.com.br/forum/topico-this-props-location-query-em-novas-versoes-48309.
    };
  }

  componentDidMount() {
    const reviews = localStorage.getItem('reviews');
    if (reviews) this.updateReviews(JSON.parse(reviews));
    // Load reviews from localStorage
    const {
      product: { id },
    } = this.state;
    const storage = JSON.parse(localStorage.getItem('cart-products'));
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

  addReview = (review) => {
    const { reviews } = this.state;
    const updatedReviews = [...reviews, review];
    this.setState({
      reviews: updatedReviews,
    });
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    // Save to localStorage
  };

  updateReviews = (reviews) => this.setState({ reviews });
  // Can't use setState in componentDidMount

  updatequantity = (quantity) => this.setState({ quantity });
  // Can't use setState in componentDidMount

  savetoLocalStorage = (newQty) => {
    const storageKey = 'cart-products';

    const {
      product: {
        id,
        title,
        thumbnail,
        price,
        available_quantity: availableQuantity,
      },
    } = this.state;
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
        const newStorage = [...storage, savedProduct];
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
          data-testid="product-detail-add-to-cart"
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
    this.setState((prev) => ({ quantity: prev.quantity + 1 }));
  };

  render() {
    const {
      product: { title, thumbnail, price },
    } = this.state;
    const { reviews } = this.state;
    return (
      <>
        <div className="product-detail-header">
          <Link className="return-button" to="/">
            <img
              alt="return-button"
              src="https://img.icons8.com/ios/50/000000/left2.png"
            />
          </Link>
          <ShoppingCartIcon />
        </div>
        <div className="product-detail" data-testid="product-detail-name">
          <div className="product-detail-section">
            <h3>{title}</h3>
            <img alt={ title } className="product-thumbnail" src={ thumbnail } />
            <p>{`R$${price.toFixed(2)}`}</p>
          </div>
          <div>{this.addToCartBtn()}</div>
        </div>
        <AddReview addReview={ this.addReview } />
        {reviews.length > 0 && <Reviews reviews={ reviews } />}
      </>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
}.isRequired;
