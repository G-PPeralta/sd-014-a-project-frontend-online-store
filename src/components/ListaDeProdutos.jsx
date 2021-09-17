import React from 'react';
import PropTypes from 'prop-types';

class ListaDeProdutos extends React.Component {
  render() {
    const { searchProduct, productList, chamarApi, searchInput } = this.props;
    return (
      <>
        <input
          data-testid="query-input"
          type="text"
          value={ searchProduct }
          onChange={ searchInput }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ chamarApi }
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

ListaDeProdutos.propTypes = {
  searchProduct: PropTypes.string,
  productList: PropTypes.array,
  chamarApi: PropTypes.func,
  searchInput: PropTypes.func,
}.isRequired;

export default ListaDeProdutos;
