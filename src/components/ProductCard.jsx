import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AddToCardButton from './AddToCardButton';
import { addProduct, decreaseProduct, removeProduct } from '../services/shopCartManag';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeIs: true,
    };
  }

  render() {
    const { product, offCart: inHome, handleQuantityButtonsClick } = this.props;
    const { homeIs } = this.state;
    const id = inHome ? 'product-detail-link' : 'shopping-cart-product-name';
    return (
      <FadeIn>
        <Card
          data-testid="product"
          style={ { width: '15rem', height: '28rem' } }
          className="m-2 mb-4"
        >
          <Link
            data-testid={ id }
            to={ { pathname: `/details/${product.id}`, state: { product } } }
            className="text-decoration-none text-dark"
          >
            <Card.Img variant="top" src={ product.thumbnail } />
            <Card.Body>
              <p className="font-bold">
                {product.title}
              </p>
              { product.shipping.free_shipping
              && (<p data-testid="free-shipping">Frete Grátis</p>) }
              {!inHome && (
                <p data-testid="shopping-cart-product-quantity">
                  {product.counter}
                </p>
              )}
              <Card.Text>{`R$ ${product.price}`}</Card.Text>
            </Card.Body>
          </Link>
          {!inHome && (
            <>
              <button
                data-testid="product-increase-quantity"
                name="increase"
                onClick={ () => {
                  addProduct(product);
                  handleQuantityButtonsClick('increase', product);
                } }
                type="button"
              >
                +
              </button>
              <button
                data-testid="product-decrease-quantity"
                disabled={ product.counter === 1 }
                onClick={ () => {
                  decreaseProduct(product);
                  handleQuantityButtonsClick('decrease', product);
                } }
                type="button"
              >
                -
              </button>
              <button
                onClick={ () => {
                  removeProduct(product);
                  handleQuantityButtonsClick('', product);
                } }
                type="button"
              >
                X
              </button>
            </>
          )}
          {inHome && <AddToCardButton homeIs={ homeIs } product={ product } />}
        </Card>
      </FadeIn>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
