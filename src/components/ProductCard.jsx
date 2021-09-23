import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { stateSearch } = this.props;
    return (
      <div>
        { stateSearch.map((product) => (
          <div key={ product.id }>
            <Link
              data-testid="product-detail-link"
              to={ `/product/${product.id}+${product.category_id}` }
            >
              <div data-testid="product">
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.title}</p>
              </div>

            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => {
                const localStorageValue = JSON.parse(localStorage.getItem('carrinho'));
                const saveLocal = [...localStorageValue, product];
                localStorage.setItem('carrinho', JSON.stringify(saveLocal));
              } }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}
ProductCard.propTypes = {
  stateSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductCard;
