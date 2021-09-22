import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { callback, list } = this.props;
    return (
      <ul>
        { list.map((category) => (
          <li key={ category.id }>
            <input
              data-testid="category"
              type="radio"
              name="filtro"
              value={ category.id }
              onChange={ callback }
            />
            { category.name }
          </li>
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  callback: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
