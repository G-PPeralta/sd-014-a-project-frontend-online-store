import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class ProductCard extends React.Component {
  render() {
    const { product, offCart } = this.props;
    const id = offCart ? 'product-detail-link' : 'shopping-cart-product-name';
    return (
      <Card
        data-testid="product"
        style={ { width: '15rem', height: '26rem' } }
        className="m-2 mb-4"
      >
        <Link
          data-testid={ id }
          to={ { pathname: `/details/${product.id}`,
            state: { product } } }
          className="text-decoration-none text-dark"
        >
          <Card.Img variant="top" src={ product.thumbnail } />
          <Card.Body>
            <p><strong>{ product.title }</strong></p>
            <Card.Text data-testid="shopping-cart-product-quantity">
              R$
              { product.price }
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
