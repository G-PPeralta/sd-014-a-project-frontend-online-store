import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
    await this.setState({ resultApi: results.results,
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { resultApi } = this.state;
    console.log(resultApi);
    const myProduct = resultApi.find((result) => result.id === id);
    return (myProduct ? ( // This ternary conditional is needed, to ensure we only try to acces myProduct object properties, after resultApi is a non blank array to be iterated with the find HoF
      <section>
        <p data-testid="product-detail-name">
          { `${myProduct.title} - ${myProduct.price} ` }
        </p>
        <img src="" alt="" />
        <div>
          <ul>
            especificacoes tecnicas
          </ul>
        </div>
        <CartButton />
      </section>
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
