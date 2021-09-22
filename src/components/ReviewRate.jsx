import React from 'react';
import 'react-rater/lib/react-rater.css';
import PropTypes from 'prop-types';
import { readProducts } from '../services/shopCartManag';

class ReviewRate extends React.Component {
  verifyRate = () => {
    const { product } = this.props;
    const { id } = product;
    const products = readProducts();
    return products.map((e) => {
      if (e.id === id && e.rate) {
        return e.rate.map((el, i) => (
          <div key={ i } style={ { margin: '0 0 20px 15px' } }>
            <div>
              {'Email: '}
              {el.email}
            </div>
            <div>
              {'Avaliação: '}
              {el.rating}
            </div>
            <div>
              {'Mensagem: '}
              {el.message}
            </div>
          </div>
        ));
      }
      return null;
    });
  }

  render() {
    return (
      <div>
        {' '}
        {' '}
        { this.verifyRate() }
      </div>
    );
  }
}

ReviewRate.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ReviewRate;
