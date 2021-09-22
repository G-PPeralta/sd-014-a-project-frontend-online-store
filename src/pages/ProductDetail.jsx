import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { productsSave } from '../services/local';
import { getCartProductsAndQuantity } from '../services/local'
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: { attributes: [] },
      cartProducts: [],
      itensQuantity: [],
    };
    this.onClickBtn = this.onClickBtn.bind(this);
    this.getProductItemFromML = this.getProductItemFromML.bind(this);
    this.getItens = this.getItens.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProductItemFromML(id).then((response) => {
      this.setState({
        product: response,
      });
    });
    this.getItens();
  }

  getItens() {
    const cartInformation = getCartProductsAndQuantity();
    console.log(cartInformation[0])
    this.setState({ cartProducts: cartInformation[0], itensQuantity: cartInformation[1] });
  }

  onClickBtn({ target: { id } }) {
    console.log('cliquei!')
    console.log(id);
    const { cartProducts, itensQuantity, product } = this.state;
    console.log(cartProducts);
    if (cartProducts === null) return console.log('erro!');
    if (cartProducts.some((ele) => ele.id === id)) {
      const quantity = itensQuantity;
      quantity[id] += 1;
      this.setState({ itensQuantity: quantity });
      productsSave(cartProducts, quantity);
    } else {
      const cart = [...cartProducts, product];
      const quantity = itensQuantity;
      quantity[id] = 1;
      this.setState({ cartProducts: cart, itensQuantity: quantity });
      productsSave(cart, quantity);
    }
  }

  async getProductItemFromML(id) {
    const responseRaw = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return responseRaw.json();
  }

  render() {
    const { product } = this.state;
    const { attributes } = product;
    return (
      <section>
        <h1 data-testid="product-detail-name">{ `${product.title}` }</h1>
        <div>
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <div>
          <h2>
            { `R$ ${product.price}` }
          </h2>
          <button
            id={ product.id } 
            data-testid="product-detail-add-to-cart"
            onClick={ this.onClickBtn }
          >
            Adicionar ao carrinho
          </button>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
              Carrinho
          </Link>
        </div>
        <div>
          <h2>Especificações Técnicas</h2>
          <ul>
            { attributes.map(({ name, value_name: valueName }, index) => (
              <li key={ `attribute${index}` }>
                { `${name}: ${valueName}` }
              </li>
            )) }
          </ul>
        </div>
      </section>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
