import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to={ { pathname: `/details/${product.id}`,
          state: { product } } }
      >
        <Card
          data-testid="product"
          style={ { width: '12rem' } }
          className="m-2"
        >
          <Card.Img variant="top" src={ product.thumbnail } />
          <Card.Body>
            <p><strong>{ product.title }</strong></p>
            <Card.Text>
              R$
              { product.price }
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
