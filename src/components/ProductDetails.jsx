import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import { Link } from 'react-router-dom'; */

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.pickAPI();
  }

    pickAPI = async () => {
      const { match: { params: { id } } } = this.props;
      const productDetails = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const productDetailsJson = await productDetails.json();
      console.log(productDetailsJson);
      this.setState({
        product: productDetailsJson,
      });
    }

    /* addProductToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      let check = '';
      if (cart) {
        check = cart.find((({ id }) => id === product.id));
      } else {
        cart = [];
      }
      if (check) {
        Object.assign(product, { quantity: check.quantity + 1 });
        cart = cart.filter(({ id }) => id !== check.id);
        console.log(cart);
      } else {
        Object.assign(product, { quantity: 1 });
      }
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    } */

    render() {
      const { product: { title, thumbnail, price/* , id */ } } = this.state;
      return (
        <div>
          <p data-testid="product-detail-name">
            {' '}
            { title }
            {' '}
          </p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
          {/* <button
            data-testid="shopping-cart-button"
            type="button"
            onClick={ () => this.addProductToCart({ title, price, thumbnail, id }) }
          >
            <Link
              to="/Cart"
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao Carrinho
            </Link>
          </button> */}
        </div>
      );
    }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
