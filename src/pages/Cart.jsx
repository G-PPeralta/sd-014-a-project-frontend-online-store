import React, { Component } from 'react';

class Cart extends Component {

  constructor(props) {
    super(props);
    const { xablau } = this.props;
    const myCartList = { xablau };
  }

  // VERIFICAR QUANTOS ITENS TEM DE CADA PRODUTO

  // RETORNAR UM NOVO ARRAY COM OS ITENS, COM A QUANTIDADE DE CADA

  // FAZER UM MAP DO CARRINHO

  // APÓS O CARRINHO PRONTO, AO EXCLUIR UM ITEM, EDITAR O ARRAY E DEVOLVER PARA O FILHO O NOVO XABLAU

  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <p data-testit="shopping-cart-product-name">Produto:</p>
        <p data-testit="shopping-cart-product-quantity">Quantidade:</p>
      </div>
    );
  }
}

export default Cart;
