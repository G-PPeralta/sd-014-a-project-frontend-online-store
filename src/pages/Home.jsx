import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import { getCategories } from '../services/api';
import Categories from '../component/Categories';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.callGetCategories = this.callGetCategories.bind(this);
  }

  componentDidMount() {
    this.callGetCategories();
  }

  async callGetCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="searchTextHome">
            <input type="text" name="searchTextHome" id="searchTextHome" />
          </label>
          <CartButton />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
        { categories.map((category) => (
          <Categories
            key={ category.id }
            category={ category }
          />
        ))}
      </div>
    );
  }
}
