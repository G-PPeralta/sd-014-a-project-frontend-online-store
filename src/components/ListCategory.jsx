import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends Component {
  render() {
    const { categoryList, addCotegory } = this.props;
    return (
      <select onChange={ addCotegory }>
        {/* <option value="">Categorias</option> */}
        {categoryList.map((category) => (
          <option
            data-testid="category"
            key={ category.id }
            value={ category.id }
          >
            { category.name }
          </option>
        ))}
      </select>
    );
  }
}

ListCategory.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ListCategory;
