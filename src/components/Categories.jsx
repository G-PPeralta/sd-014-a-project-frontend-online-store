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
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  render() {
    const { onClick, className } = this.props;
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
          onClick={ onClick }
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
