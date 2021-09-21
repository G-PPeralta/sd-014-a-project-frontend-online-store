import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListaDeProdutos extends React.Component {
  render() {
    const { searchProduct, productList, chamarApi, searchInput } = this.props;
    console.log(productList);
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
        <main>
          {productList.map((produtoAtual) => (
            <Link
              key={ produtoAtual.id }
              data-testid="product-detail-link"
              to={ {
                pathname: `/detalhesproduto/${produtoAtual.id}`,
                state: { ...produtoAtual },
              } }
            >
              <section data-testid="product" key={ produtoAtual.id }>
                <img src={ produtoAtual.thumbnail } alt={ produtoAtual.title } />
                <p>{ produtoAtual.title }</p>
              </section>
            </Link>
          ))}
        </main>
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
