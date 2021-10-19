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
    this.cardRender = this.cardRender.bind(this);
    this.cartHistory = this.cartHistory.bind(this);
  }

  componentDidMount() {
    this.cardRender();
  }

  cartHistory() {
    const { history } = this.props;
    history.push('/shopCart');
  }

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
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.cartHistory }
        >
          Ir para o carrinho.
        </button>
        <div>
          <img src={ productResults.thumbnail } alt="Product" />
          <h2 data-testid="product-detail-name">
            { productResults.title }
          </h2>
          <h3>
            { productResults.price }
          </h3>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => {
            const storageValue = JSON.parse(localStorage.getItem('cartList'));
            const saveList = [...storageValue, productResults];
            localStorage.setItem('cartList', JSON.stringify(saveList));
          } }
        >
          Adcionar
        </button>
        <textarea
          data-testid="product-detail-evaluation"
          cols="30"
          rows="10"
          placeholder="Avalie o Produto como bem quiser"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductCard;
