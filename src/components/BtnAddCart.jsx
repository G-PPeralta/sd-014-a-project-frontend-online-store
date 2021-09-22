import React from 'react';
import PropTypes from 'prop-types';
import addToCart from '../services/localstorage';

class BtnAddCart extends React.Component {
  render() {
    const {
      product: { title, price, thumbnail },
      id,
    } = this.props;
    return (
      <button
        type="button"
        onClick={ () => addToCart({ title, price, thumbnail, id }) }
        data-testid="product-add-to-cart"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

BtnAddCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default BtnAddCart;
