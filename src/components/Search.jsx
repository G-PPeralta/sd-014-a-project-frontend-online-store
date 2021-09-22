import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  render() {
    const { productList, requisition } = this.props;
    if (productList.length === 0 && requisition) {
      return (
        <div>Nenhum produto foi encontrado</div>);
    }
    return (
      productList.map((item) => (
        <Link
          to={ { pathname: `product/${item.id}`, state: item } }
          key={ item.id }
          data-testid="product-detail-link"
        >
          <div key={ item.id } data-testid="product">
            <h2>{ item.title }</h2>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{item.price}</p>
          </div>
        </Link>
      ))
    );
  }
}

Search.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
  requisition: PropTypes.bool.isRequired,
};

export default Search;
