import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import './style/MenuCategory.css';

export default class MenuCategory extends React.Component {
  render() {
    const { categorias, handleRadio, selected } = this.props;

    return (
      <div className="Menu">
        {categorias.map((categoria) => (<MenuItem
          key={ categoria.id }
          categoria={ categoria.name }
          identifier={ categoria.id }
          handleRadio={ handleRadio }
          selected={ selected }
        />))}
      </div>
    );
  }
}

MenuCategory.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  handleRadio: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
