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
              data-testid="category"
            >
              <input
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
