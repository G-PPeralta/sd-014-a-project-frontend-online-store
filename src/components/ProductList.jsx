import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { list } = this.props;

    // Requisito 5: se o resultado da busca for vazio retornará mensagem "Nenhum produto foi encontrado"
    if (list.length === 0) {
      return (
        <div>
          Nenhum produto foi encontrado
        </div>
      );
    }
    return (
      // Requisito 5: passa por todos os produtos do resultado da busca e retorna cada item com a estrutura definida em ProductCard
      <div>
        { list.map((product, id) => <ProductCard key={ id } product={ product } />)}
      </div>
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};
