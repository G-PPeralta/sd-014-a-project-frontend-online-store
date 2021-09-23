import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, localChanger, cartSetState } = this.props;
    const productQuant = { ...product };
    productQuant.quantidade = 1;
    return (
      <div data-testid="product">
        <button
          onClick={ () => localChanger(productQuant) }
          data-testid="product-add-to-cart"
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <Link
          key={ product.id }
          data-testid="product-detail-link"
          to={ {
            pathname: `/detalhesproduto/${product.id}`,
            state: { ...product },
            cartSetState,
          } }
        >
          <h1>{ product.title}</h1>
          <img src={ product.thumbnail } alt={ product.id } />
          <p>
            R$
            {product.price}
          </p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(String),
  localChanger: PropTypes.func.isRequired,

};

ProductCard.defaultProps = {
  product: undefined,
};

export default ProductCard;
