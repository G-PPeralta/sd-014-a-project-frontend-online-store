import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Produto.css';

class Produto extends Component {
  render() {
    const { produto } = this.props;
    const { id, title, price, thumbnail } = produto;

    return (
      <Link
        to={ {
          pathname: `/detalhes/${id}`,
          state: {
            infoProduto: produto,
          },
        } }
        data-testid="product-detail-link"
        style={ { textDecoration: 'none' } }
      >
        <li className="produto-container" data-testid="product">
          <div className="image-container">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="text-container">
            <h2 className="price">
              { `R$  ${price}` }
            </h2>
            <p className="nome-produto">{ title }</p>
          </div>
        </li>
      </Link>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
};

export default Produto;
