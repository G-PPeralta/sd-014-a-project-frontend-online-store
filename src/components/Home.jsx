import React, { Component } from 'react';
import { getCategories } from '../services/api';
import ListCategories from './ListCategories';
import ProductCard from './ProductCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
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

  render() {
    const { state: { categories } } = this;
    return (
      <div>
        <input data-testid="query-input" type="text" />
        <button data-testid="query-button" type > Pesquisar </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <section>
          <ProductCard />
        </section>
        <ListCategories categories={ categories } />
      </div>
    );
  }
}

export default Home;
