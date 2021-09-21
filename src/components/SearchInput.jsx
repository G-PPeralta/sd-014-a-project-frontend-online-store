import React from 'react';

class SearchInput extends React.Component {
  render() {
    return (
      <div className="App" data-testid="home-initial-message">
        <input />
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }
}

export default SearchInput;
import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from './CardProduct';

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayProduct: [],
      stateFetch: false,
      inputSearch: '',
      teste: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
    this.fetchSearchProduct = this.fetchSearchProduct.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  searchProduct({ arrayProduct }) {
    if (arrayProduct.length !== 0) {
      return (
        <div>
          {arrayProduct.map((products) => (<CardProduct
            key={ products.category_id }
            title={ products.title }
            image={ products.thumbnail }
            price={ products.price }
          />))}
        </div>
      );
    }
    console.log('nao encontrado');
  }

  async fetchSearchProduct() {
    const { inputSearch } = this.state;
    const items = await getProductsFromCategoryAndQuery('MLB5672', inputSearch);
    this.setState({
      arrayProduct: items.results,
      stateFetch: true,
    });
  }

  render() {
    const { inputSearch } = this.state;
    return (
      <>
        <div className="App" data-testid="home-initial-message">
          <label htmlFor="inputFilter">
            {' '}
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
              id="inputFilter"
              name="inputSearch"
              value={ inputSearch }
              data-testid="query-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.fetchSearchProduct }
          >
            Search
          </button>
          {this.searchProduct(this.state)}
        </div>
        <div />
      </>
    );
  }
}

export default SearchInput;
