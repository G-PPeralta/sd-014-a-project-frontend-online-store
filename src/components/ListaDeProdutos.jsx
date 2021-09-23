import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ListaDeProdutos extends React.Component {
  render() {
    const { searchProduct, productList,
      chamarApi, searchInput, localChanger } = this.props;
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
          {productList.map((product) => (
            <ProductCard
              localChanger={ localChanger }
              key={ product.id }
              product={ product }
            />
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
  localChanger: PropTypes.func,
}.isRequired;

export default ListaDeProdutos;
