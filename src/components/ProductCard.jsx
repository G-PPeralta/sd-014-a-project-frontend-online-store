import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AddToCardButton from './AddToCardButton';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeIs: true,
    };
  }

  render() {
    const { product, offCart } = this.props;
    const { homeIs } = this.state;
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
            {!offCart
              && <p data-testid="shopping-cart-product-quantity">{product.counter}</p>}
            <Card.Text>
              R$
              { product.price }
            </Card.Text>
          </Card.Body>
        </Link>
        { offCart && <AddToCardButton homeIs={ homeIs } product={ product } /> }
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
