import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      product: {},
    };
    this.getResults = this.getResults.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  componentDidMount() {
    const { match: { params: { idQueryCategory } } } = this.props;
    const query = idQueryCategory.split('&')[1];
    const categoryId = idQueryCategory.split('&')[2];
    this.getResults(categoryId, query)
      .then((results) => {
        this.getProductInfo(results);
      });
  }

  async getResults(categoryId, query) {
    const jsonResponse = await getProductsFromCategoryAndQuery(categoryId, query);
    const results = await jsonResponse.results;
    return results;
  }

  async getProductInfo(results) {
    console.log(results);
    const { match: { params: { idQueryCategory } } } = this.props;
    const id = idQueryCategory.split('&')[0];
    const {
      title,
      thumbnail,
      price,
      attributes } = results.find((item) => item.id === id);
    this.setState({
      product: {
        title,
        thumbnail,
        price,
        attributes,
      },
    }, () => {
      const { product } = this.state;
      console.log(product);
    });
  }

  render() {
    return (
      <h2>Product Details</h2>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idQueryCategory: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
