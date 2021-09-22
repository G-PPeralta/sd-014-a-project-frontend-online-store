import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import BtnCart from '../components/BtnCart';
import BtnAddCart from '../components/BtnAddCart';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      // attributes,
      id: '',
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
    const { match: { params: { idQueryCategory } } } = this.props;
    const productId = idQueryCategory.split('&')[0];
    const {
      title,
      thumbnail,
      price,
      // attributes,
      id } = results.find((item) => item.id === productId);
    this.setState({
      title,
      thumbnail,
      price,
      // attributes,
      id,
    });
  }

  render() {
    const { title, thumbnail, price, id } = this.state;
    return (
      <div>
        <h2>Product Details</h2>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <BtnCart />
        <BtnAddCart
          source="product-detail"
          title={ title }
          price={ +price }
          thumbnail={ thumbnail }
          id={ id }
        />
      </div>
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
