import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ol data-testid="category">
        {categories}
      </ol>
    );
  }
}

Sidebar.propTypes = {
  categories: PropTypes.string.isRequired,
};
export default Sidebar;
