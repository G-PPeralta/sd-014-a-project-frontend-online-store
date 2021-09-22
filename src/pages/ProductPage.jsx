import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { selectedProducts } } } = this.props;
    this.state = {
      cardProducts: selectedProducts,
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.setCartItems = this.setCartItems.bind(this);
  }

  setCartItems() {
    const { cardProducts } = this.state;
    localStorage.setItem('products', JSON.stringify(cardProducts));
  }

  addProductToCart(product) {
    const { cardProducts } = this.state;
    const cartList = [];
    if (cartList.includes(product)) { // || cardProducts.includes(product)) {
      const item = cartList.indexOf(product);
      cartList[item].quantity += 1;
    // } else if (cardProducts.includes(product)) {
    //   const item = cartList.indexOf(product);
    //   cartList[item].quantity += 1;
    } else {
      product.quantity = 1;
      cartList.push(product);
    }
    this.setState({
      cardProducts: [...cardProducts, ...cartList],
    });
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <main>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{`R$${price}`}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addProductToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          onClick={ () => this.setCartItems() }
        >
          Ir carrinho de compras
        </Link>
        <form>
          <h1>Como você avalia o produto?</h1>
          <label htmlFor="1">
            <input type="radio" name="rate" id="1" value="1" />
            1
          </label>
          <label htmlFor="2">
            <input type="radio" name="rate" id="2" value="2" />
            2
          </label>
          <label htmlFor="3">
            <input type="radio" name="rate" id="3" value="3" />
            3
          </label>
          <label htmlFor="4">
            <input type="radio" name="rate" id="4" value="4" />
            4
          </label>
          <label htmlFor="5">
            <input type="radio" name="rate" id="5" value="5" />
            5
          </label>
          <textarea
            placeholder="Digite um Comentario"
            data-testid="product-detail-evaluation"
          />
          <button type="button">Enviar</button>
        </form>
      </main>
    );
  }
}

ProductPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      selectedProducts: PropTypes.arrayOf(PropTypes.object),
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductPage;
