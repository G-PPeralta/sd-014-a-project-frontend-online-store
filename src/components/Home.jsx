import React, { Component } from 'react';
import ListaDeProdutos from './ListaDeProdutos';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListCategory from './ListCategory';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      retornoCategory: [],
      productList: [],
      searchProduct: '',
      categoriaSelecionada: 'MLB5672',
    };
    this.searchInput = this.searchInput.bind(this);
    this.chamarApi = this.chamarApi.bind(this);
    this.addCotegory = this.addCotegory.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  componentDidUpdate() {
    this.chamarApi();
  }

  async test() {
    const t1 = await getCategories();
    const t2 = await t1;
    return this.setState({
      retornoCategory: t2,
    });
  }

  async chamarApi() {
    const { searchProduct, categoriaSelecionada } = this.state;
    const t1 = await getProductsFromCategoryAndQuery(categoriaSelecionada, searchProduct);
    const t2 = await t1.results;
    return this.setState({
      productList: t2,
    });
  }

  searchInput(event) {
    this.setState({ searchProduct: event.target.value });
  }

  addCotegory({ target }) {
    const { value } = target;
    console.log(value);
    this.setState({
      categoriaSelecionada: value,
    });
  }

  render() {
    const { retornoCategory, searchProduct, productList } = this.state;
    const { searchInput, chamarApi, addCotegory } = this;
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <ListCategory categoryList={ retornoCategory } addCotegory={ addCotegory } />
        <ListaDeProdutos
          searchProduct={ searchProduct }
          productList={ productList }
          searchInput={ searchInput }
          chamarApi={ chamarApi }
        />
      </div>
    );
  }
}

export default Home;
