import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AddToCardButton from './AddToCardButton';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <FadeIn>
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
              <p>{ product.title }</p>
              <Card.Text>
                R$
                { product.price }
              </Card.Text>
            </Card.Body>
          </Link>
          <AddToCardButton />
        </Card>
      </FadeIn>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
