import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  handleClick = (item) => {
    const { addtocart } = this.props;
    addtocart(item);
  }

  render() {
    const { productList, requisition } = this.props;
    if (productList.length === 0 && requisition) {
      return (
        <div>Nenhum produto foi encontrado</div>);
    }
    return (
      productList.map((item) => (
        <div key={ item.id }>
          <Link
            to={ { pathname: `product/${item.id}`, state: item } }
            key={ item.id }
            data-testid="product-detail-link"
          >
            <div data-testid="product">
              <h2>{ item.title }</h2>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{item.price}</p>
            </div>
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => this.handleClick(item) }
          >
            Adicionar no carrinho
          </button>
        </div>
      ))
    );
  }
}

Search.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
  requisition: PropTypes.bool.isRequired,
  addtocart: PropTypes.func.isRequired,
};

export default Search;
