import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultCategory: [], // guadar a resposta da api
      idProduct: '',
    };
    // ideia: passar id da categoria e do id por params.
    // ideia atual: pegar history anterior e joga agora, faz um find pelo id atual(location.path.id)
    this.cardRender = this.cardRender.bind(this);
  }

  componentDidMount() {
    this.cardRender();
  }

  // category = MLB1367 query

  async cardRender() {
    const { match } = this.props;
    const { id, idCategory } = match.params;
    const response = await getProductsFromCategoryAndQuery(idCategory, null);
    this.setState({
      resultCategory: response.results,
      idProduct: id,
    });
  }

  render() {
    const { resultCategory, idProduct } = this.state;
    const productResults = resultCategory.find((product) => product.id === idProduct);
    if (productResults === undefined) {
      return (
        <div>
          Carregando, aguarde...
        </div>
      );
    }
    return (
      <div>
        <img src={ productResults.thumbnail } alt="Product" />
        <h2 data-testid="product-detail-name">
          { productResults.title }
        </h2>
        <h3>
          { productResults.price }
        </h3>
      </div>
    );
  }
}

ProductCard.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductCard;
