import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class DetalhesProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      produtoFiltrado: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { location: { state: { category_id: catID } } } = this.props;
    const { location: { state: { title } } } = this.props;
    getProductsFromCategoryAndQuery(catID, title)
      .then((obj) => obj.results.find((produto) => produto.id.includes(id)))
      .then((produto) => this.setState({ produtoFiltrado: produto }));
  }

  render() {
    const { produtoFiltrado: { title } } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
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
