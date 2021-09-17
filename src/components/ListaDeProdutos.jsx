import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ListaDeProdutos extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '',
      productList: [],
    };
    this.searchInput = this.searchInput.bind(this);
    this.chamarApi = this.chamarApi.bind(this);
  }

  chamarApi() {
    const { searchProduct } = this.state;
    getProductsFromCategoryAndQuery('', searchProduct)
      .then((result) => this.setState({ productList: result.results }));
  }

  searchInput(event) {
    this.setState({ searchProduct: event.target.value });
  }

  render() {
    const { searchProduct, productList } = this.state;
    return (
      <>
        <input
          data-testid="query-input"
          type="text"
          value={ searchProduct }
          onChange={ this.searchInput }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.chamarApi }
        >
          Pesquisar
        </button>
        {productList.map((produtoAtual) => (
          <section data-testid="product" key={ produtoAtual.id }>
            <p>{ produtoAtual.title }</p>
          </section>
        ))}
      </>
    );
  }
}

export default ListaDeProdutos;
