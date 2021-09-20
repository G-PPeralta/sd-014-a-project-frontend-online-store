import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import QuantityButton from './QuantityButton';
import Message from './Message';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeIs: true,
    };
  }

  render() {
    const { product, inHome, handleQuantityButtonsClick } = this.props;
    const { homeIs } = this.state;
    const id = inHome ? 'product-detail-link' : 'shopping-cart-product-name';
    return (
      <li
        data-testid="product"
        style={ { width: '15rem', height: '28rem' } }
        className="
          m-2
          mb-4
          d-flex
          flex-column
          justify-content-between
          align-items-center
          rounded
          shadow-sm
          bg-white
          border
          hover-shadow
          "
      >
        <FadeIn>
          <Link
            data-testid={ id }
            to={ { pathname: `/details/${product.id}`, state: { product } } }
            className="text-decoration-none text-dark"
          >
            <img
              className="
              mx-auto d-block
              w-75
              text-center
              "
              src={ product.thumbnail }
              alt={ product.name }
            />
            <div className="border-top border-2 p-3">
              <h3>
                {`R$ ${product.price}`}
              </h3>
              <div className="d-flex pt-2 justify-content-between">
                {!inHome && (
                  <span data-testid="shopping-cart-product-quantity">
                    {'Quantidade: '}
                    <h5 className="d-inline">{product.counter}</h5>
                  </span>
                )}
                { product.shipping.free_shipping
                  && <Message
                    message="Frete Grátis"
                    className="text-success"
                    dataTestId="free-shipping"
                  /> }
              </div>
              <p
                className="pt-2 text-muted"
                style={ { fontSize: '0.8rem' } }
              >
                {product.title}
              </p>
            </div>
          </Link>
          {!inHome && (<QuantityButton
            product={ product }
            handleQuantityButtonsClick={ handleQuantityButtonsClick }
          />)}
          {inHome && <AddToCartButton homeIs={ homeIs } product={ product } />}
        </FadeIn>
      </li>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
