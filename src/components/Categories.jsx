import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      productsList: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.onClick = this.onClick.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  onClick(event) {
    this.fetchAPI(event.target.value);
  }

  fetchAPI(category) {
    getProductsFromCategoryAndQuery(category, '').then((query) => {
      this.setState({ productsList: query.results });
    });
  }

  fetchCategories() {
    getCategories().then((categories) => {
      this.setState({
        categoriesList: categories,
      });
    });
  }

  render() {
    const { categoriesList, productsList } = this.state;
    return (
      <div>
        {categoriesList.map((categorie) => (
          <div key={ categorie.id }>
            <label htmlFor={ categorie.id }>
              <input
                data-testid="category"
                type="radio"
                id={ categorie.id }
                onClick={ this.onClick }
                name="categorie"
                value={ categorie.id }
              />
              {categorie.name}
            </label>
          </div>
        ))}
        { productsList.map((product) => (
          <div data-testid="product" key={ product.id }>
            <h3>{ product.title }</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price }</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
