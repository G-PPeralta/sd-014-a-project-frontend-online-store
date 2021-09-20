import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListCategories from './ListCategories';
import ProductCard from './ProductCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productFiltred: [],
    };

    this.filterByCategory = this.filterByCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  async filterByCategory(categoryId, query) {
    const productFiltred = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      productFiltred: productFiltred.results,
    });
  }

  render() {
    const { state: { categories } } = this;
    return (
      <div>
        <input data-testid="query-input" type="text" />
        <button data-testid="query-button" type="button"> Pesquisar </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <section>
          <ProductCard />
        </section>
        <ListCategories
          filterByCategory={ this.filterByCategory }
          categories={ categories }
        />
      </div>
    );
  }
}

export default Home;
