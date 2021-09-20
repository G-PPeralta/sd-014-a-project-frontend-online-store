import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const { match: { params: { id } } } = this.props;
    getProductById(id).then((res) => this.setState({ product: res }));
  }

  render() {
    const { product: { title, price, thumbnail, itemDescription } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{itemDescription}</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default ProductDetails;
