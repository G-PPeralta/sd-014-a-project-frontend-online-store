import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Categorias.css';
import Produtos from './Produtos';
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
    this.updateProducts = this.updateProducts.bind(this);
  }

  async findCategory({ target }) {
    this.setState({
      find: target.textContent,
    }, async () => {
      const { find } = this.state;
      const resolve = await api.getProductsFromCategoryAndQuery(find);
      this.setState({
        response: resolve.results,
      }, () => this.updateProducts());
    });
  }

  updateProducts() {
    const { response } = this.state;
    const { metodo } = this.props;
      this.setState(
        { request: false, },
        () => {
          metodo(response);
        });
  }

  render() {
    const { responseApi } = this.props;
    const { response } = this.state;

    const categorias = responseApi.map((categoria) => {
      const { id, name } = categoria;
      return (
        <li
          data-testid="category"
          onClick={ this.findCategory }
          id={ id }
          key={ id }
        >
          <p className="categorias">{ name }</p>
        </li>
      );
    });

    //  ;

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
