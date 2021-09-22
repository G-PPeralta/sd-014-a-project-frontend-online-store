import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { filterByCategory } = this.props;
    filterByCategory(target.id);
  }

  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul className="categories-ul">
          {categories.map((category) => (
            <li key={ category.id }>
              <label data-testid="category" htmlFor={ category.id }>
                {category.name}
                <input
                  onChange={ this.handleChange }
                  type="radio"
                  name="category"
                  id={ category.id }
                />
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
  filterByCategory: PropTypes.func.isRequired,
};

export default ListCategories;
