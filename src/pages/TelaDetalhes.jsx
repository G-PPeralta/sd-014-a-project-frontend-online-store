import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToCart, sumFromCart } from '../services/localStorageServices';

class TelaDetalhes extends Component {
  constructor(props) {
    super(props);

    const { location: { state: { product } } } = this.props;

    this.state = {
      product,
      quantidade: 0,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product } = this.state;
    addToCart(product);
    this.setState({
      quantidade: sumFromCart(product),
    });
  }

  render() {
    const { product, quantidade } = this.state;
    const { attributes } = product;
    let { price } = product;
    if (price) {
      price = price
        .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    return (
      <main>
        <nav>
          <Link to="/shopping-cart">Carrinho</Link>
          <Link to="/">Voltar</Link>
        </nav>
        <section data-testid="product-detail-name">
          <h2 data-testid="shopping-cart-product-name">{product.title}</h2>
          <h2>{ `Valor ${price}` }</h2>
          <div>
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <div>
            <h3>Especificações Técnicas</h3>
            <ul>
              { attributes.map(({ name, value_name: valueName }, index) => (
                <li key={ `attribute${index}` }>
                  { `${name}: ${valueName}` }
                </li>
              )) }
            </ul>
          </div>
          <div data-testid="shopping-cart-button">
            <button
              type="button"
              onClick={ this.handleClick }
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
            <h4>
              Quantidade:
            </h4>
            <div
              data-testid="shopping-cart-product-quantity"
            >
              <h3>{quantidade}</h3>
            </div>

          </div>
        </section>
      </main>
    );
  }
}

TelaDetalhes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default TelaDetalhes;
