import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.categoryAndQuery = this.categoryAndQuery.bind(this);
  }

  componentDidMount() {
    this.categoryAndQuery();
  }

  async categoryAndQuery() {
    const endipoint = await getProductsFromCategoryAndQuery();
    console.log(endipoint);
    return endipoint;
  }

  render() {
    console.log(this);
    const { product } = this.props;
    return (
      <div>
        <p>pagina de detalhes</p>
        <h3 data-testid="product-detail-name">Nome do produto</h3>
        <img src="" alt="" />
        <spam>imagem</spam>
        <p>preço</p>
        <p>especificação técnica</p>
        <button type="button">Adicionar ao Carrinho</button>
      </div>
    );
  }
}

export default ProductDetails;
