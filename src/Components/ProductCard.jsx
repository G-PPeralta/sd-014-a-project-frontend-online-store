import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      disabled: false,
    };
  }

  componentDidMount() {
    this.getItemFromProps();
    this.handleDisabled();
  }

  handleDisabled = () => {
    const { product } = this.props;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) {
      for (let i = 0; i < currentCart.length; i += 1) {
        if (
          currentCart[i].productId === product.id
          && currentCart[i].quantity === product.available_quantity
        ) {
          this.setState({ disabled: true });
        }
      }
    }
  }

  getItemFromProps = () => {
    const { product } = this.props;
    this.setState({ product });
  }

  toCart = () => {
    const { totalItemsInCart } = this.props;
    const { product } = this.state;
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    if (currentCart) { // carrinho já existe
      for (let i = 0; i < currentCart.length; i += 1) {
        if (currentCart[i].productId === product.id) { // se item existe, quantity + 1
          currentCart[i].quantity += 1;
          localStorage.setItem('cart', JSON.stringify(currentCart));
          totalItemsInCart();
          if (currentCart[i].quantity === product.available_quantity) {
            this.setState({ disabled: true });
          }
          return;
        }
      } // se item não existir, adiciona no carrinho
      const newProduct = { productObj: product, quantity: 1, productId: product.id };
      localStorage.setItem('cart', JSON.stringify([...currentCart, newProduct]));
      totalItemsInCart();
    } else { // carrinho vazio, cria array com item
      const newProduct = [{ productObj: product, quantity: 1, productId: product.id }];
      localStorage.setItem('cart', JSON.stringify(newProduct));
      totalItemsInCart();
    }
  }

  render() {
    const {
      product: { title, thumbnail, price, id },
      product,
      disabled,
    } = this.state;
    const freeShipping = (
      <p data-testid="free-shipping">
        <i className="fas fa-truck" />
        Frete Grátis
      </p>

    );
    const hasShip = product.shipping;
    let ship;
    if (hasShip) {
      ship = product.shipping.free_shipping;
    }
    return (
      <div
        data-testid="product"
        className="div-card d-flex flex-column align-items-center m-1 text-center"
      >
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <div className="d-flex flex-row flex-wrap">
          <span>R$</span>
          <span>{ price }</span>
        </div>
        {ship && freeShipping}
        <Link
          to={ { pathname: `/product/${id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          Mais Informações
        </Link>
        <button
          type="button"
          className="btn btn-success"
          onClick={ this.toCart }
          data-testid="product-add-to-cart"
          disabled={ disabled }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  totalItemsInCart: PropTypes.func.isRequired,
};
