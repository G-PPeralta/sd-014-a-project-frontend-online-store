import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EvaluationForm from '../components/EvaluationForm';

const numberFormat = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      resultApi: [],
      cartSize: '0',
    };
    this.callApi = this.callApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setSize = this.setSize.bind(this);
  }

  componentDidMount() {
    this.callApi();
    this.setSize();
  }

  async handleClick(event, availableQuantity) {
    event.preventDefault();
    const cartList = {
      prodId: event.target.className,
      name: event.target.name,
      prodPrice: event.target.value,
      availableQuantity,
    };
    if (!JSON.parse(localStorage.getItem('cartList'))) {
      localStorage.setItem('cartList', JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem('cartList'));
    localStorage.setItem('cartList',
      JSON.stringify([...cart, cartList]));
    const newCart = JSON.parse(localStorage.getItem('cartList'));
    console.log(newCart);
    localStorage.setItem('cartSize', newCart.length);
    this.setState({
      cartSize: newCart.length,
    });
  }

  async setSize() {
    const newCart = JSON.parse(localStorage.getItem('cartList'));
    if (newCart !== null) {
      localStorage.setItem('cartSize', newCart.length);
      this.setState({
        cartSize: newCart.length,
      });
    } else {
      this.setState({
        cartSize: '0',
      });
    }
  }

  async callApi() {
    const { location: { apiProps: { categoriaDeProduto, searchText } } } = this.props;
    const results = await getProductsFromCategoryAndQuery(categoriaDeProduto,
      searchText);
    await this.setState({
      resultApi: results.results,
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { resultApi, cartSize } = this.state;
    const myProduct = resultApi.find((result) => result.id === id);

    return myProduct ? ( // This ternary conditional is needed, to ensure we only try to acces myProduct object properties, after resultApi is a non blank array to be iterated with the find HoF
      <main className="shopping-main">
        <Header />
        {/* <section className="cart-banner"> */}
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
          className="shopping-cart-button"
        >
          <CartIcon />
          <span
            data-testid="shopping-cart-size"
            className="shopping-cart-size"
          >
            { cartSize }
          </span>
        </Link>
        {/* </section> */}

        <section className="main-sec-detail">
          <p data-testid="product-detail-name" className="product-detail-name">
            {myProduct.title}
          </p>
          <img className="img-detail" src={ myProduct.thumbnail } alt="" />
          <p className="product-detail-p">
            <span className="product-detail-spec-title">
              Aceita MercadoPago?
            </span>
            <span className="product-detail-spec-descr">
              {myProduct.accepts_mercadopago ? ' Sim' : ' Não'}
            </span>
          </p>
          <p className="product-detail-p">
            <span className="product-detail-spec-title">
              Quantidade Disponível:
            </span>
            <span className="product-detail-spec-descr">
              {myProduct.available_quantity}
            </span>
          </p>
          <p className="product-detail-p">
            <span className="product-detail-spec-title">Preço:</span>
            <span className="product-detail-spec-descr">
              {numberFormat(myProduct.price)}
            </span>
          </p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            name={ myProduct.title }
            value={ myProduct.price }
            className={ id }
            onClick={ (event) => this.handleClick(event, myProduct.available_quantity) }
          >
            Adicionar ao Carrinho
          </button>
          <EvaluationForm />
        </section>
        <Footer />
      </main>
    ) : (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
        className="shopping-cart-button"
      >
        <CartIcon />
        <span
          data-testid="shopping-cart-size"
          className="shopping-cart-size"
        >
          { cartSize }
        </span>
      </Link>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    apiProps: PropTypes.shape({
      categoriaDeProduto: PropTypes.string.isRequired,
      searchText: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
