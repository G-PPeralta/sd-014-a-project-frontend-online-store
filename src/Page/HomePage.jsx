import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import MenuCategory from '../components/MenuCategory';
import ProductsView from '../components/ProductsView';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      selectedCategory: '',
      produtos: [],
      querySearch: '',
    };
  }

  componentDidMount() {
    this.atualizaState();
  }

  handleInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  handleSubmit = () => {
    this.setProducts();
  }

  handleRadioChange = (selectedCategory) => {
    this.setState({ selectedCategory });
    this.setProducts();
  };

  atualizaState = async () => {
    const categorias = await getCategories();
    this.setState({ categorias });
  };

  setProducts = async () => {
    const produtos = await getProductsFromCategoryAndQuery(
      this.selectedCategory,
      this.querySearch,
    );
    const resp = produtos ? produtos.results : this.produtos;
    this.setState({ produtos: resp });
    localStorage.setItem('produtos', JSON.stringify(resp));
  }

  render() {
    const { addCart } = this.props;
    const { categorias, produtos, querySearch, selectedCategory } = this.state;
    return (
      <div data-testid="home-initial-message">
        <input
          type="text"
          data-testid="query-input"
          id="querySearch"
          value={ querySearch }
          onChange={ this.handleInputChange }
        />
        <button type="submit" data-testid="query-button" onClick={ this.handleSubmit }>
          Pesquisar
        </button>
        <div>
          <CartButton
            produtos={ produtos }
            addCart={ addCart }
          />
        </div>
        {categorias && (
          <MenuCategory
            categorias={ categorias }
            selected={ selectedCategory }
            handleRadio={ this.handleRadioChange }
          />
        )}
        <h3>Digite algum termo de pesquisa ou escolha uma categoria.</h3>
        <ProductsView produtos={ produtos } atualizaCarrinho={ addCart } />
      </div>
    );
  }
}

HomePage.propTypes = {
  addCart: PropTypes.func.isRequired,
};
