import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProdutosPage extends Component {
  render() {
    const { produ } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h2>{produ.title}</h2>
        <img src={ produ.thumbnail } alt="" />
        <p>{produ.price}</p>
        <button type="submit">Adicionar ao carrinho</button>
      </div>
    );
  }
}

ProdutosPage.propTypes = {
  produ: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default ProdutosPage;
