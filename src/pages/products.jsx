import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProdutosPage from '../components/produtosPage';

class Products extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { CategoriaId } } } = this.props;
    this.state = {
      produtos: [],
      CategoriaId,
    };
  }

  componentDidMount() {
    this.getProdutos();
  }

    getProdutos = async () => {
      const { CategoriaId } = this.state;
      const getProducts = await getProductsFromCategoryAndQuery(CategoriaId, '');
      this.setState({ produtos: getProducts.results });
    }

    render() {
      const { match: { params: { productId } } } = this.props;
      const { produtos } = this.state;
      return (
        <>
          { produtos.map((produ) => produ.id === productId
          && <ProdutosPage key={ produ.id } produ={ produ } />)}
        </>
      );
    }
}

Products.propTypes = {
  CategoriaId: PropTypes.string,
  productId: PropTypes.string,
}.isRequired;

export default Products;
