import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Evaluations from '../components/Evaluations';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Product extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { productInfos } } } = this.props;
    document.title = productInfos.title;
  }

  componentDidMount() {
    this.ProductSearch();
  }

  ProductSearch = async () => {
    const { location: { state: { productInfos } } } = this.props;
    const searchobj = {
      category: productInfos.category_id,
      query: productInfos.title,
    };
    await getProductsFromCategoryAndQuery(searchobj);
  }

  render() {
    const { location: { state: { productInfos } } } = this.props;
    if (productInfos.length === 0) {
      return null;
    }
    const { title, price, thumbnail } = productInfos;
    return (
      <div className="product-detail-infos">
        <p data-testid="product-detail-name">{ title }</p>
        <p className="product-detail-price">{ price }</p>
        <img src={ thumbnail } alt="produto" />
        <div className="especif-tecnicas">
          <p>Especificações Técnicas</p>
          <ul>
            <li>A</li>
            <li>B</li>
          </ul>
        </div>
        <Evaluations />
      </div>
    );
  }
}

Product.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
