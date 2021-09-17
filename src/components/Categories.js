import React from 'react';
import { getCategories } from '../services/api';
import Loading from './Loading';

export default class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesAPI();
  }

  getCategoriesAPI = async () => {
    const categories = await getCategories();

    this.setState({ isLoading: false, categories });
  }

  showCategories = () => {
    const { categories } = this.state;
    return (
      categories.map(({ name, id }) => (
        <p data-testid="category" key={ id } id={ id }>{ name }</p>
      ))
    );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <aside>
        { isLoading ? <Loading /> : this.showCategories() }
      </aside>
    );
  }
}
