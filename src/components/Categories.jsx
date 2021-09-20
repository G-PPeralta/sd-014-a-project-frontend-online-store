import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    getCategories().then((categories) => {
      this.setState({
        categoriesList: categories,
      });
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div>
        {categoriesList.map(({ name, id }) => (
          <p data-testid="category" key={ id }>{name}</p>
        ))}
      </div>
    );
  }
}

export default Categories;
