import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';

class ProductDetail extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { title, price } = params;

    return (
      <div data-testid="product">
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p>{ price }</p>
        <AddToCart
          testId="product-detail-add-to-cart"
          itemTitle={ title }
          itemPrice={ price }
        />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductDetail;
