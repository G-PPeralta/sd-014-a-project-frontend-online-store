import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import saveLocalStorage from '../services/localStorage';
import freeShiping from '../services/freeShipping';
import FreteGratis from './FreteGratis';

export default class CardProduct extends Component {
  render() {
    const { product, carShop } = this.props;
    const { thumbnail, title, price, id } = product;
    return (
      <div
        data-testid="product"
        // className="d-flex
        // flex-column
        // p-2 justify-content-between mb-2
        // align-items-center card-product
        // border rounded border-dark"
        className="d-flex p-2 mb-2 me-2 border rounded border-dark card-product
        justify-content-between flex-wrap align-items-center"
      >
        <Link
          to={ {
            pathname: `/ProductDetails/${id}`,
            state: { product },
          } }
          className=" d-flex text-decoration-none text-center justify-content-between"
        >
          <div
            data-testid="product-detail-link"
            className="d-flex cart-element align-items-center justify-content-around"
          >
            <img src={ thumbnail } alt={ title } />
            <div className="name">
              <h6 className="text-dark name">{title}</h6>
              { freeShiping(product) ? <FreteGratis /> : <div />}
            </div>
          </div>
        </Link>
        <div className="align-self-center justify-self-center">
          <h5 className="text-danger">{`R$${price.toFixed(2)}`}</h5>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success me-3"
            data-testid="product-add-to-cart"
            onClick={ () => {
              saveLocalStorage(product);
              carShop();
            } }
          >
            <i className="fas fa-cart-plus" />
          </button>
        </div>
      </div>
    );
  }
}
CardProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  carShop: PropTypes.func.isRequired,
};
