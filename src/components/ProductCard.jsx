import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
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
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
