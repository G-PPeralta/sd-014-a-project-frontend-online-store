import React, { Component } from 'react';
import CategorieList from '../components/CategorieList';
import { getCategories } from '../services/api';
import ShoppingIcon from '../components/ShoppingIcon';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  getCategoriesFromApi = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <input
          type="text"
          name="search"
        />
        <ShoppingIcon />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategorieList categories={ categories } />
      </div>
    );
  }
}
