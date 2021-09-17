import React from 'react';

import Category from './Category';

import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <section className="">
        <h1>Categorias:</h1>
        { categories.map((category) => (<Category
          key={ category.id }
          title={ category.name }
          id={ category.id }
        />)) }
      </section>
    );
  }
}

export default Categories;
