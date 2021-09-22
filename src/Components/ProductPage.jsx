import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import EvaluationForm from './EvaluationForm';

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      review: {
        email: '',
        text: '',
      },
      stars: 0,
      totalItems: 0,
      disabled: false,
    };
  }

  componentDidMount() {
    this.totalItemsInCart();
    this.getItemFromProps();
    this.handleDisabled();
  }

  componentDidUpdate() {
    this.reviewRender();
  }

  handleDisabled = () => {
    const { location: { state: { product } } } = this.props;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) {
      for (let i = 0; i < currentCart.length; i += 1) {
        if (
          currentCart[i].productId === product.id
          && currentCart[i].quantity === product.available_quantity
        ) {
          this.setState({ disabled: true });
        }
      }
    }
  }

  getItemFromProps = () => {
    const { location: { state: { product } } } = this.props;
    this.setState({ product });
  }

  handleInput = ({ target }) => {
    const { value, name } = target;
    this.setState((prev) => (
      {
        review: { ...prev.review, ...{ [name]: value } },
      }
    ));
  }

  handleFavorites = ({ target }) => {
    const { id } = target;
    this.setState({
      stars: id,
    });
  }

  handleButton = () => {
    const { review, review: { email }, stars } = this.state;
    const { location: { state: { product: { id } } } } = this.props;
    const MIN_LENGTH = 3;
    if (
      email.length > MIN_LENGTH
      && stars >= 1
    ) {
      const previousReviews = JSON.parse(localStorage.getItem(id));
      if (!previousReviews) {
        const newReview = { ...review, stars };
        localStorage.setItem(id, JSON.stringify([newReview]));
        this.setState({ review: { email: '', text: '' } });
      } else {
        const newReview = { ...review, stars };
        localStorage.setItem(id, JSON.stringify([...previousReviews, newReview]));
        this.setState({ review: { email: '', text: '' } });
      }
    }
  }

  reviewRender = () => {
    const { location: { state: { product: { id } } } } = this.props;
    const reviewsForItem = JSON.parse(localStorage.getItem(id));
    if (reviewsForItem) {
      return (
        <div>
          {reviewsForItem.map((review) => (
            <div key={ `${review.email}-${id}` }>
              {`${review.stars} estrelas!`}
              <p>
                {review.email}
              </p>
              <p data-testid="product-detail-evaluation">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      );
    }
  }

  totalItemsInCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) {
      const totalItems = currentCart.reduce((acc, item) => {
        acc += item.quantity;
        return acc;
      }, 0);
      this.setState({ totalItems });
    }
  }

  toCart = () => {
    const { product } = this.state;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) { // carrinho já existe
      for (let i = 0; i < currentCart.length; i += 1) {
        if (currentCart[i].productId === product.id) { // se item existe, quantity + 1
          currentCart[i].quantity += 1;
          localStorage.setItem('cart', JSON.stringify(currentCart));
          this.totalItemsInCart();
          if (currentCart[i].quantity === product.available_quantity) {
            this.setState({ disabled: true });
          }
          return;
        }
      } // se item não existir, adiciona no carrinho
      const newProduct = { productObj: product, quantity: 1, productId: product.id };
      localStorage.setItem('cart', JSON.stringify([...currentCart, newProduct]));
      this.totalItemsInCart();
    } else { // carrinho vazio, cria array com item
      const newProduct = [{ productObj: product, quantity: 1, productId: product.id }];
      localStorage.setItem('cart', JSON.stringify(newProduct));
      this.totalItemsInCart();
    }
  }

  render() {
    const { totalItems, review: { email, text }, product, disabled } = this.state;
    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{product.title}</p>
          <p>{product.price}</p>
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.toCart }
          disabled={ disabled }
        >
          +
        </button>
        <div>
          <EvaluationForm
            handleInput={ this.handleInput }
            handleFavorites={ this.handleFavorites }
            textValue={ text }
            emailValue={ email }
          />
          <button
            type="button"
            onClick={ this.handleButton }
          >
            Avaliar
          </button>
        </div>
        <div>
          {this.reviewRender()}
        </div>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <p data-testid="shopping-cart-size">
          { totalItems }
        </p>
      </div>
    );
  }
}

ProductPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
