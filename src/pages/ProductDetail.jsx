import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { nome } = params;

    return (
      <div data-testid="product">
        <h2 data-testid="product-detail-name">{ nome }</h2>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.object).isRequired,
  nome: PropTypes.string.isRequired,
};

export default ProductDetail;
