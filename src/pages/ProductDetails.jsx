import React from 'react';
import PropTypes from 'prop-types';
import UserReviewForm from '../Components/UserReviewForm';
import CartButton from '../Components/CartButton';
import * as cart from '../services/cart';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { title, price, thumbnail, attributes } = state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p>{`R$ ${price}`}</p>
        <p><img src={ thumbnail } alt={ title } /></p>
        <section>
          <ul>
            { attributes.map(({ id, name, value_name: valueName }) => (
              <li key={ id }>{`${name}: ${valueName}`}</li>
            ))}
          </ul>
        </section>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => {
            const item = { product: state, quant: 1 };
            cart.increaseQuant(item);
          } }
        >
          Adicionar ao carrinho
        </button>
        <section>
          <UserReviewForm />
        </section>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
