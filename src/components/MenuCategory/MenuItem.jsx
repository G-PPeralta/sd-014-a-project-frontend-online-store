import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
  render() {
    const { produto } = this.props;
    return (
      <div data-testid="category">{produto}</div>
    );
  }
}

MenuItem.propTypes = {
  produto: PropTypes.string.isRequired,
};
