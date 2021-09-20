import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends Component {
  render() {
    const { category: { name } } = this.props;
    return (
      <li data-testid="category">
        { name }
      </li>
    );
  }
}

ListCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default ListCategory;
