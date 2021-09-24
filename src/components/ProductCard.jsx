import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends React.Component {
  addCartItem(product) {
    const cartStorage = JSON.parse(localStorage.getItem('carrinho'));
    const findItem = cartStorage.find((cart) => cart.id === product.id);
    if (findItem !== undefined) {
      const newCart = cartStorage.map((item) => (
        item.id === product.id
          ? { ...findItem, quantity: findItem.quantity + 1 } : item));
      localStorage.setItem('carrinho', JSON.stringify([...newCart]));
    } else {
      localStorage
        .setItem('carrinho',
          JSON.stringify([...cartStorage, { ...product, quantity: 1 }]));
    }
  }

  render() {
    const { stateSearch } = this.props;
    return (
      <div className="productDiv">
        { stateSearch.map((product) => (
          <div key={ product.id } className="products">
            <Link
              data-testid="product-detail-link"
              to={ `/product/${product.id}+${product.category_id}` }
            >
              {product.shipping.free_shipping
                ? <h5 data-testid="free-shipping">Frete Gratis</h5> : false}
              <div data-testid="product">
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.title}</p>
              </div>

            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => this.addCartItem(product) }
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
