import React from 'react';
import PropTypes from 'prop-types';

export default class CategoryList extends React.Component {
  render() {
    const { categoryList } = this.props;
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
};
