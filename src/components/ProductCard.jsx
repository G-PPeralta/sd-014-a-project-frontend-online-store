import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <Card
        data-testid="product"
        style={ { width: '15rem', height: '26rem' } }
        className="m-2 mb-4"
      >
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${product.id}`,
            state: { product } } }
          className="text-decoration-none text-dark"
        >
          <Card.Img variant="top" src={ product.thumbnail } />
          <Card.Body>
            <p><strong>{ product.title }</strong></p>
            <Card.Text>
              R$
              { product.price }
            </Card.Text>
          </Card.Body>
        </Link>
        <button
          type="button"
          className="border-top-0
          border
          rounded-bottom
          bg-primary
          text-white
          p-2
          w-100
          "
        >
          Adicionar ao carrinho
          {' '}
          <FaShoppingCart />
        </button>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
