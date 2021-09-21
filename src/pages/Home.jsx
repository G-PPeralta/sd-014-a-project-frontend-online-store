import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ShoppingIcon from '../components/ShoppingIcon';
import CategorieList from '../components/CategorieList';
import ProductList from '../components/ProductList';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      queryInput: '',
      list: [],
      // submit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  // Requisito 5: salva o valor digitado no input
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Requisito 5: faz requisição para a API de acordo com o que foi digitado no input (queryInput)
  // Após isso, salva o resultado em list
  async handleClick() {
    const { queryInput } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', queryInput);
    console.log(results);
    this.setState({
      list: results,
    });
  }

  getCategoriesFromApi = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories, list, queryInput } = this.state;

    return (
      <div>
        <input
          type="text"
          name="queryInput"
          value={ queryInput }
          onChange={ this.handleChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Procurar
        </button>

        <ShoppingIcon />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategorieList categories={ categories } />

        {/* Requisito 5: gera uma lista com todos os produtos que possuem
        a informação digitada no input (list) */}
        { list && <ProductList list={ list } /> }
      </div>
    );
  }
}
