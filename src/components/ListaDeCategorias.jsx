import React from 'react';
import PropTypes from 'prop-types';

class ListaDeCategorias extends React.Component {
  render() {
    const { categoria } = this.props;
    return (
      <li data-testid="category">{ categoria.name }</li>
    );
  }
}

ListaDeCategorias.propTypes = {
  categoria: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default ListaDeCategorias;
