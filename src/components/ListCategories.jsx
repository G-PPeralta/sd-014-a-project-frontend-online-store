import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { getCategories } from '../services/api';
import '../styles/categories.css';

export default class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getCategoriesAPI();
  }

  getCategoriesAPI = async () => {
    this.setState({ loading: true });
    const categoriesAPI = await getCategories();
    this.setState({ categories: categoriesAPI, loading: false });
  };

  categoriesList = () => {
    const { categories } = this.state;
    const { handleClick } = this.props;

    return (
      <aside className="list-group">
        <h2 className="category-itens">Categorias:</h2>
        {categories.map(({ id, name }) => (
          <label key={ id } htmlFor={ id } className="category-itens">
            <input
              id={ id }
              data-testid="category"
              type="radio"
              onClick={ handleClick }
              name="category"
              value={ id }
            />
            <label htmlFor={ id }>{name}</label>
          </label>
        ))}
      </aside>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <section>
          {loading ? <Loading /> : this.categoriesList()}
        </section>
      </div>
    );
  }
}

ListCategories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
