import React from 'react';
import PropTypes from 'prop-types';

class AddToCartBtn extends React.Component {
  constructor() {
    super();
    this.toLocalStorage = this.toLocalStorage.bind(this);
  }

  toLocalStorage() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    localStorage.setItem('title', title);
    localStorage.setItem('thumbnail', thumbnail);
    localStorage.setItem('price', price);
  }

  render() {
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.toLocalStorage }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

AddToCartBtn.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default AddToCartBtn;
