import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import InputGen from '../components/InputGen';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <header>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            Carrinho
          </Link>
        </header>
        <InputGen
          config={ ['text', 'searchText', 'search-text-input', searchText, false,
            this.handleChange, 'Faça sua pesquisa'] }
        />
        <div className="itemList">
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </div>
      </div>
    );
  }
}

export default Search;
