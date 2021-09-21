import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery, getProductById } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { category, title, id } } } = this.props;
    const result = (await getProductsFromCategoryAndQuery(category, title)).results[0];
    const idSearch = getProductById(id);
    if (result.id === id) {
      return this.setState({ product: result });
    }
    this.setState({ product: await idSearch });
  }

  render() {
    const { product: { title, price, thumbnail, itemDescription } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        {itemDescription ? <p>{itemDescription}</p> : null }
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  }).isRequired,
};

export default ProductDetails;
