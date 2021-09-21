import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ProductList from './ProductList';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      category: '',
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { searchTerm, category } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, searchTerm);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { searchTerm, products } = this.state;
    return (
      <div>
        <Categories handleCategoryChange={ this.handleChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <input
          data-testid="query-input"
          type="text"
          name="searchTerm"
          value={ searchTerm }
          onChange={ this.handleChange }
          placeholder="Exemplo: produto 'xxx'"
        />
        <ProductList products={ products } />
      </div>
    );
  }
}

export default SearchField;
