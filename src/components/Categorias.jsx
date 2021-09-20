import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Categorias.css';

import CategoriaFilter from './CategoriaFilter';
import * as api from '../services/api';

class Categorias extends React.Component {
  constructor() {
    super();
    this.state = {
      find: '',
      response: '',
      request: false,
    };
    this.findCategory = this.findCategory.bind(this);
  }

  async findCategory({ target }) {
    this.setState({
      find: target.textContent,
    });
    const { find } = this.state;
    const resolve = await api.getProductsFromCategoryAndQuery(find, find);
    this.setState({
      response: resolve.results,
      request: true,
    });
  }

  render() {
    const { responseApi } = this.props;
    const { response, request } = this.state;

    const categorias = responseApi.map((categoria) => {
      const { id, name } = categoria;
      return (
        <radio
          data-testid="category"
          onClick={ this.findCategory }
          id={ id }
          key={ id }
        >
          <p className="categorias">{ name }</p>
        </radio>
      );
    });

    return (
      <div className="side-container">
        <h2>Categorias</h2>
        <ul className="categorias-container">
          { categorias }
        </ul>
        { request && <CategoriaFilter responseApi={ response } /> }
      </div>
    );
  }
}

Categorias.propTypes = {
  responseApi: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categorias;
