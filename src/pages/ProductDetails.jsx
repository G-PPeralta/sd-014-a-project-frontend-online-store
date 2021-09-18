import React from 'react';

class ProductDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div>
        <p>pagina de detalhes</p>
        <h3>Nome do produto</h3>
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
