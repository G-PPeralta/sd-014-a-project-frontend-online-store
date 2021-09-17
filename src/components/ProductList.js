import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

export default class ProductList extends Component {
  render() {
    const { lista } = this.props;
    if (lista.length === 0) {
      return (
        <section>
          Nenhum produto foi encontrado
        </section>
      );
    }
    return (
      <section className="d-flex flex-wrap">
        { lista.map((produto, id) => <CardProduct key={ id } product={ produto } />)}
      </section>
    );
  }
}

ProductList.propTypes = {
  lista: PropTypes.arrayOf(PropTypes.any).isRequired,
};
