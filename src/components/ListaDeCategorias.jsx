import React from 'react';
import PropTypes from 'prop-types';

class ListaDeCategorias extends React.Component {
  render() {
    const { categoria, onClick } = this.props;
    return (
      <li data-testid="category">
        <button
          type="button"
          value={ categoria.id }
          onClick={ onClick }
        >
          { categoria.name }
        </button>
      </li>
    );
  }
}

ListaDeCategorias.propTypes = {
  categoria: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListaDeCategorias;
