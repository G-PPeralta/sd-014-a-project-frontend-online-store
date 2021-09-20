import React, { Component } from 'react';
import { getCategories } from '../services/api';
import ListCategories from './ListCategories';

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
        <input type="text" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <ListCategories categories={ categories } />
      </div>
    );
  }
}

export default Home;
