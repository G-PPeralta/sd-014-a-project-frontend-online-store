import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class DetalhesProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      produtoFiltrado: {},
      quantidade: 1,
    };
    this.quantUpdate = this.quantUpdate.bind(this);
    this.addCarrinho = this.addCarrinho.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { location: { state: { category_id: catID } } } = this.props;
    const { location: { state: { title } } } = this.props;
    getProductsFromCategoryAndQuery(catID, title)
      .then((obj) => obj.results.find((produto) => produto.id.includes(id)))
      .then((produto) => this.setState({ produtoFiltrado: produto }));
  }

  addCarrinho() {
    const { quantidade, produtoFiltrado } = this.state;
    const { history } = this.props;
    const acumulador = produtoFiltrado;
    acumulador.quantidade = quantidade;

    const cartStorage = JSON.parse(localStorage.getItem('Cart'));

    const saveCart = (produtos) => localStorage
      .setItem('Cart', JSON.stringify(produtos));
    if (cartStorage === null) {
      saveCart([acumulador]);
    } else {
      saveCart([...cartStorage, acumulador]);
    }
    history.push('/shopping-cart');
  }

  quantUpdate(event) {
    const { value } = event.target;
    this.setState({
      quantidade: Number(value),
    });
  }

  render() {
    const { produtoFiltrado: { title } } = this.state;
    const { quantidade } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <input
          value={ quantidade }
          type="number"
          name=""
          id=""
          onChange={ this.quantUpdate }
        />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addCarrinho }
        >
          adinionar
        </button>
      </div>
    );
  }
}

DetalhesProduto.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      catID: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
}.isRequired;

export default DetalhesProduto;
