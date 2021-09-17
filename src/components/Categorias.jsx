import React from 'react';
import PropTypes from 'prop-types';

class Categorias extends React.Component {
  render() {
    const { responseApi } = this.props;

    const categorias = responseApi.map((categoria) => {
      const { id, name } = categoria;
      return (
        <li data-testid="category" id={ id } key={ id }>
          <p>{ name }</p>
        </li>
      );
    });

    return (
      <ul>
        { categorias }
      </ul>
    );
  }
}

Categorias.propTypes = {
  responseApi: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categorias;
