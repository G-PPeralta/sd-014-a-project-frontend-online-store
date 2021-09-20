import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorieList extends Component {
  render() {
    const { categories } = this.props;

    return (
      <section>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
                type="radio"
                name="categorySearch"
                id={ id }
                value={ id }
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
};
