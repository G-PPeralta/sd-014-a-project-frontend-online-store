import React from 'react';
import CartItem from '../components/CartItem';
import Categorias from '../components/Categorias';
import Produtos from '../components/Produtos';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      query: '',
      responseAPI: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getCategories().then((result) => {
      this.setState({
        categories: result,
      });
    });
  }

  handleClick() {
    const { query } = this.state;
    getProductsFromCategoryAndQuery('', query).then((response) => {
      this.setState({
        responseAPI: response.results,
      });
    });
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { categories, query, responseAPI } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="searchProduct">
            <input
              onChange={ this.handleChange }
              value={ query }
              data-testid="query-input"
              type="text"
              id="searchProduct"
            />
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            pesquisar
          </button>
        </div>

        <CartItem />

        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categorias categories={ categories } />
        <Produtos responseAPI={ responseAPI } />
      </div>

    );
  }
}

export default Search;
