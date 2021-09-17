import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';
import SearchComponent from './SearchComponent';
import '../css/home.css'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      input: '',
      lista: [],
      submit: false,
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

  handleClick() {
    const { input, category } = this.state;
    this.setState(async () => {
      const listaProdutos = await getProductsFromCategoryAndQuery(category, input);
      this.setState({
        lista: listaProdutos.results,
        submit: true,
      });
    });
  }

  render() {
    const { input, lista, submit } = this.state;
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <SearchComponent
          value={ input }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        { submit && <ProductList lista={ lista } /> }
      </div>
    );
  }
}

export default Home;
