import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import AvaluatorForm from '../components/AvaluatorForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 0,
      image: '',
      attributes: [],
      name: '',
    };
  }

  componentDidMount() {
    this.fetchProductDetails();
  }

  fetchProductDetails = async () => {
    const { match: { params: { id: productId, category } } } = this.props;
    const result = await getProductsFromCategoryAndQuery(category, productId);
    const details = result.results.find(({ id }) => id === productId);
    this.setState({
      price: details.price,
      image: details.thumbnail,
      attributes: details.attributes,
      name: details.title,
    });
  }

  render() {
    const { price, image, attributes, name } = this.state;
    const {
      match: { params: { id: productId, category } },
      handleAddToCart,
    } = this.props;
    return (
      <section>
        <h1 data-testid="product-detail-name">{name}</h1>
        <img src={ image } alt={ name } />
        <p>{price}</p>
        <ul>
          {attributes.map((attr) => (
            <li key={ attr.id }>
              {`${attr.name}: ${attr.value_name}`}
            </li>
          ))}
        </ul>
        *
        {' '}
        <AvaluatorForm
          productId={ productId }
          category={ category }
          handleAddToCart={ handleAddToCart }
        />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
    }),
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
