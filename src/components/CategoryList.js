import React from 'react';
import PropTypes from 'prop-types';

export default class CategoryList extends React.Component {
  render() {
    const { categoryList, handleCategory } = this.props;
    return (
      <div>
        <ul>
          {categoryList.map((category) => (
            <li
              key={ category.id }
            >
              <input
                data-testid="category"
                type="radio"
                name="filtroCategoria"
                id={ category.id }
                onChange={ handleCategory }
              />
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleCategory: PropTypes.func.isRequired,
};
