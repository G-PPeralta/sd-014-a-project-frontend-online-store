import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ProductList from './ProductList';
import SearchComponent from './SearchComponent';
import Categories from './Categories';
import '../css/home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      input: '',
      lista: [],
      submit: false,
      listCategories: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.listCategories();
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

  listCategories() {
    this.setState(async () => {
      const categories = await getCategories();
      this.setState({
        listCategories: categories,
      });
    });
  }

  render() {
    const { input, lista, submit, listCategories } = this.state;
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <SearchComponent
          value={ input }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        <Categories listCategories={ listCategories } />

        { submit && <ProductList lista={ lista } /> }
      </div>
    );
  }
}

export default Home;
