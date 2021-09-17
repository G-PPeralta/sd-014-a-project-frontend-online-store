import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends Component {
  render() {
    const { categoryList } = this.props;
    return (
      <ul>
        {categoryList.map((category) => (
          <li
            data-testid="category"
            key={ category.id }
          >
            { category.name }
          </li>
        ))}
      </ul>
    );
  }
}

ListCategory.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ListCategory;
