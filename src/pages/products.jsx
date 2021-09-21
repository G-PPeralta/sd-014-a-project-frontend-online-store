import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProdutosPage from '../components/produtosPage';

class products extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { Categoria_id }} } = this.props;
    this.state = {
      produtos: [],
      Categoria_id,
    };
  }

  componentDidMount() {
    this.getProdutos();
  }

    getProdutos = async () => {
      const { Categoria_id } = this.state;
      const getProducts = await getProductsFromCategoryAndQuery(Categoria_id, '');
      this.setState({ produtos: getProducts.results });
    }

    render() {
      const { match: { params: { product_id }} } = this.props;
      const { produtos } = this.state;
      return (
        <>
          { produtos.map((produ) => produ.id === product_id
          && <ProdutosPage key={ produ.id } produ={ produ } />)}
        </>
      );
    }
}

// (produ.id === id ? <produtosPage key={ produ.id } produ={ produ } /> : 'Error')

export default products;
