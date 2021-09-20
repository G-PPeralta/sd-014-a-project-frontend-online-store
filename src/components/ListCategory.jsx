import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends Component {
  render() {
    const { category: { name, id }, onClick } = this.props;
    return (
      <li data-testid="category">
        { name }
        <input name="item-list" type="radio" onClick={ () => onClick(id) } />
      </li>
    );
  }
}

ListCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListCategory;
