import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

const numberFormat = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      resultApi: [],
    };
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi();
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
    const { resultApi } = this.state;
    const myProduct = resultApi.find((result) => result.id === id);
    // console.log(myProduct);

    return (myProduct ? ( // This ternary conditional is needed, to ensure we only try to acces myProduct object properties, after resultApi is a non blank array to be iterated with the find HoF
      <main className="shopping-main">
        <Header />
        <section className="cart-banner">
          <CartButton />
        </section>

        <section className="main-sec-detail">
          <p
            data-testid="product-detail-name"
            className="product-detail-name"
          >
            {myProduct.title}
          </p>
          <img className="img-detail" src={ myProduct.thumbnail } alt="" />
          <p className="product-detail-p">
            <span className="product-detail-spec-title">Aceita MercadoPago?</span>
            <span className="product-detail-spec-descr">
              {myProduct.accepts_mercadopago ? ' Sim' : ' Não'}
            </span>
          </p>
          <p className="product-detail-p">
            <span className="product-detail-spec-title">Quantidade Disponível:</span>
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
          <form>
            Avaliacoes
            <input type="email" name="email-for-evaluation" />
            <textarea
              data-testid="product-detail-evaluation"
            />
            <button type="button">Avaliar</button>
          </form>
          <img // this is just for fun... remove later!
            className="mr-bean"
            src="https://c.tenor.com/xEu4tiLm3hUAAAAd/mr-bean-mr-beans-holiday.gif"
            alt="mr. bean dancing"
          />
        </section>
        <Footer />
      </main>
    ) : <span />);
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
