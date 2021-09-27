import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCategories from '../components/ListCategories';
import ShowProducts from '../components/ShowProducts';
import { getProductsFromCategoryAndQuery } from '../services/api';
import TotalyProduct from '../components/TotalyProduct';

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
        <div className="carQtd">
          <Link
            to="/card"
            className="btn btn-primary"
            data-testid="shopping-cart-button"
          >
            <img
              className="btn-primary"
              alt="shopping-cart"
              src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
            />
          </Link>
          <TotalyProduct />
        </div>
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
