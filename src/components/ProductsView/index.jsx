import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductView extends Component {
  render() {
    const { produtos, atualizaCarrinho } = this.props;
    return (
      produtos.map((produto, id) => (
        <ProductCard
          key={ id }
          produto={ produto }
          atualizaCarrinho={ atualizaCarrinho }
        />
      ))
    );
  }
}

ProductView.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })),
}.isRequired;
