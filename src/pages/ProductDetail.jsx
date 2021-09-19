import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';

export default class ProductDetail extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const { apiProps } = this.props;
    console.log(apiProps);
    return (
      <section>
        <p data-testid="product-detail-name">Titulo - valor</p>
        <img src="" alt="" />
        <div>
          <ul>
            especificacoes tecnicas
          </ul>
        </div>
        <CartButton />
      </section>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
