import React from 'react';
import PropTypes from 'prop-types';

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
    const { onChange, className } = this.props;
    const { categories } = this.state;
    return (
      <section
        className={ className }
        style={ { backgroundColor: 'white' } }
      >
        <h5 className="mb-3">Categorias:</h5>
        { categories.map((category) => (<Category
          key={ category.id }
          title={ category.name }
          id={ category.id }
          onChange={ onChange }
        />)) }
      </section>
    );
  }
}

Categories.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
}.isRequired;

export default Categories;
