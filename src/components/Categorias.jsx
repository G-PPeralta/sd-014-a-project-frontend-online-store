import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Categorias.css';

class Categorias extends React.Component {
  render() {
    const { responseApi } = this.props;

    const categorias = responseApi.map((categoria) => {
      const { id, name } = categoria;
      return (
        <li data-testid="category" id={ id } key={ id }>
          <p className="categorias">{ name }</p>
        </li>
      );
    });

    return (
      <div className="side-container">
        <h2>Categorias</h2>
        <ul className="categorias-container">
          { categorias }
        </ul>
      </div>
    );
  }
}

Categorias.propTypes = {
  responseApi: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categorias;
