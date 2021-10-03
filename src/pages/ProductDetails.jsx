import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductReview from '../components/ProductReview';
import { addToCart, getNumberOfProductsInCart } from '../services/AddToCart';
import TotalyProduct from '../components/TotalyProduct';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      itemsInCart: 0,
    };
  }

  componentDidMount() {
    this.updateItemsIncart();
  }

  updateItemsIncart=() => {
    const items = getNumberOfProductsInCart();
    this.setState({
      itemsInCart: items,
    });
  }

  addItemsIncart =() => {
    const { location: { state } } = this.props;
    addToCart(state);
    const items = getNumberOfProductsInCart();
    this.setState({
      itemsInCart: items,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { location: { state } } = this.props;

    const { itemsInCart } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">
          { state.title }
        </p>
        <img src={ state.thumbnail } alt={ `Foto de ${state.title} ` } />
        <p>{ `Preço: ${state.price}` }</p>
        <section>
          <p>Especificações:</p>
          <p>{ `Condição: ${state.condition}` }</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.addItemsIncart }
          >
            Adicionar ao carrinho
          </button>
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
              <TotalyProduct itemsInCart={ itemsInCart } />
            </Link>
          </div>
        </section>
        <form>
          <ProductReview />
          <button
            type="submit"
            onClick={ (e) => this.handleSubmit(e) }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      condition: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
