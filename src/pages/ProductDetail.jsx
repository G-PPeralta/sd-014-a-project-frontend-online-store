import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCartProductsAndQuantity, productsSave } from '../services/local';

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      cartProducts: [],
      itensQuantity: {},
      textarea: 'Deixe seu comentário',
    };

    this.getProductItemFromML = this.getProductItemFromML.bind(this);
    this.getItens = this.getItens.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getItens();
    this.getProductItemFromML(id).then((response) => {
      this.setState({
        product: response,
      });
    });
  }

  onClickBtn() {
    const { cartProducts, itensQuantity, product } = this.state;
    console.log(cartProducts);
    if (cartProducts.some((ele) => ele.id === product.id)) {
      const quantity = itensQuantity;
      quantity[product.id] += 1;
      this.setState({ itensQuantity: quantity });
      productsSave(cartProducts, quantity);
    } else {
      const cart = [...cartProducts, product];
      const quantity = itensQuantity;
      quantity[product.id] = 1;
      this.setState({ cartProducts: cart, itensQuantity: quantity });
      productsSave(cart, quantity);
    }
  }

  getItens() {
    const cartInformation = getCartProductsAndQuantity();
    if (!cartInformation[0] || !cartInformation[1]) {
      return console.log('Already up to date!');
    }
    this.setState({ cartProducts: cartInformation[0],
      itensQuantity: cartInformation[1] });
    console.log(cartInformation);
  }

  async getProductItemFromML(id) {
    const responseRaw = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return responseRaw.json();
  }

  textChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value });
  }

  render() {
    const { product, textarea } = this.state;
    const { attributes } = product;

    return (
      <>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          Carrinho
        </Link>
        <section data-testid="product-detail-name">
          <h1>{`${product.title}`}</h1>
          <div>
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <div>
            <h2>
              {`R$ ${product.price}`}
            </h2>
          </div>
          <div>
            <h2>Especificações Técnicas</h2>
            <ul>
              {attributes && attributes.map(({ name, value_name: valueName }, index) => (
                <li key={ `attribute${index}` }>
                  {`${name}: ${valueName}`}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              type="submit"
              data-testid="product-detail-add-to-cart"
              onClick={ this.onClickBtn }
            >
              Adicionar ao carrinho
            </button>
          </div>
          <textarea
            name="textarea"
            value={ textarea }
            onChange={ this.textChange }
            data-testid="product-detail-evaluation"
          />
        </section>
      </>
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
