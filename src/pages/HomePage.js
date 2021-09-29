import React, { Component } from 'react';
import ListCategories from '../components/ListCategories';
import ShowProducts from '../components/ShowProducts';
import { getProductsFromCategoryAndQuery } from '../services/api';

import '../App.css';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
      products: [],
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = async ({ target: { value } }) => {
    const { queryInput } = this.state;
    const getAPI = await getProductsFromCategoryAndQuery(value, queryInput);
    const { results } = getAPI;
    this.setState({
      products: results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <ListCategories handleClick={ this.handleClick } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <input
          data-testid="query-input"
          name="queryInput"
          onChange={ this.handleChange }
          type="text"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
          value=""
        >
          Procurar
        </button>
        { products.length > 0 ? <ShowProducts products={ products } />
          : <p>Nenhum Produto Encontrado</p> }
      </div>
    );
  }
}
