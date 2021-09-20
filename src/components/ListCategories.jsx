import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul>
          {categories.map((category) => (
            <li key={ category.id }>
              <label data-testid="category" htmlFor={ category.id }>
                {category.name}
                <input type="checkbox" name={ category.name } id={ category.id } />
              </label>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};

export default ListCategories;
