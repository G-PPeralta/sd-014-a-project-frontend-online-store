import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesItem extends Component {
  render() {
    const { cat: { name, id }, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ id } data-testid="category">
          <input id={ id } type="radio" name="cat" onChange={ onChange } />
          {' '}
          { name }
        </label>
      </div>
    );
  }
}

CategoriesItem.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoriesItem;
