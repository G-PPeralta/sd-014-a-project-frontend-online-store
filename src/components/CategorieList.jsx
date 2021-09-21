import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorieList extends Component {
  render() {
    const { categories, selectedCategories } = this.props;

    return (
      <section>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
                type="radio"
                name="category"
                id={ id }
                value={ name }
                onChange={ selectedCategories } // Requisito 6: função que será chamada ao selecionar a categoria
              />
              { name }
            </label>
          </div>
        ))}
      </section>
    );
  }
}

CategorieList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectedCategories: PropTypes.func.isRequired,
};
