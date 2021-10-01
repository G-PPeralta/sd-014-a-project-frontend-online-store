import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BagPlusFill } from 'react-bootstrap-icons';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/cartAPI';

export default class ProductCard extends Component {
  handleClick = () => {
    const { product } = this.props;
    addToCart(product);
  }

  renderFreeShipping() {
    return (
      <p data-testid="free-shipping" className="text-success">FRETE GRÁTIS!</p>
    );
  }

  render() {
    const {
      product: { title, thumbnail, price, id, shipping: { free_shipping: freeShipping } },
    } = this.props;
    return (
      <Card
        style={ { width: '25%' } }
        className="m-3 rounded shadow"
        data-testid="product"
      >
        <Card.Img
          variant="top"
          src={ thumbnail }
          alt={ `foto do produto ${title}` }
          className="h-50"
        />
        <Card.Body className="h-25">
          <Card.Title>
            <Link
              data-testid="product-detail-link"
              to={ {
                pathname: `/product/${id}`,
                state: this.props,
              } }
              className="details-link"

            >
              {title}
            </Link>
          </Card.Title>
          <Card.Text>
            R$
            {price.toFixed(2)}
          </Card.Text>
          { freeShipping && this.renderFreeShipping()}
        </Card.Body>
        <Card.Footer>
          <button
            type="button"
            className="btn btn-outline-primary w-100"
            data-testid="product-add-to-cart"
            onClick={ this.handleClick }
          >
            <BagPlusFill />
          </button>
        </Card.Footer>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};
