import React from 'react';
import PropTypes from 'prop-types';
import PaymentProductCard from './PaymentProductCard';

class PaymentProductsList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section
        className="border rounded p-3"
        style={ { height: '200px', overflowY: 'auto' } }
      >
        <h2>Revise seus Produtos</h2>
        <ul>
          {products.map((product) => (<PaymentProductCard
            key={ product.id }
            product={ product }
          />))}
        </ul>
      </section>
    );
  }
}

PaymentProductsList.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default PaymentProductsList;
