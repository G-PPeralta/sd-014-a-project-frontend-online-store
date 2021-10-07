import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import AvaluatorForm from '../components/AvaluatorForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 0,
      thumbnail: '',
      attributes: [],
      title: '',
    };
  }

  componentDidMount() {
    this.fetchProductDetails();
  }

  fetchProductDetails = async () => {
    const { match: { params: { id: productId, category } } } = this.props;
    const result = await getProductsFromCategoryAndQuery(category, productId);
    const details = result.results.find(({ id }) => id === productId);
    const { price, thumbnail, attributes, title } = details;
    this.setState({ price, thumbnail, attributes, title });
  }

  render() {
    const { price, thumbnail, attributes, title } = this.state;
    const {
      match: { params: { id: productId, category } },
      handleAddToCart,
    } = this.props;
    const product = {
      ...this.state,
      productId,
      category,
    };
    return (
      <section>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button">Icone do Carrinho</button>
        </Link>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
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
          product={ product }
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
