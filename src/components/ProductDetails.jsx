import React from 'react';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';
import AvaliationForm from './AvaliationForm';
import { getProductsFromCategoryAndQuery, getProductById } from '../services/api';
import RenderAvaliation from './RenderAvaliation';
import FreeShipping from './FreeShipping';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { shipping: { free_shipping: false } },
      email: '',
      rating: '',
      comment: '',
      ratingsArray: [],
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRatingStorage = (event) => {
    event.preventDefault();
    const { email, rating, comment } = this.state;
    this.setState((lastState) => (
      { ratingsArray: [...lastState.ratingsArray, { email, rating, comment }] }));
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
    const { product, email, rating, comment, ratingsArray } = this.state;
    const {
      title,
      price,
      thumbnail,
      itemDescription,
      shipping,
    } = product;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        {shipping.free_shipping ? <FreeShipping /> : null}
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        {itemDescription ? <p>{itemDescription}</p> : null }
        <AddCartButton product={ product } dataTestId="product-detail-add-to-cart" />
        <AvaliationForm
          handleChange={ this.handleChange }
          handleClick={ this.handleRatingStorage }
          email={ email }
          rating={ rating }
          comment={ comment }
        />
        { ratingsArray.map((user) => (
          <RenderAvaliation
            rating={ rating }
            key={ user.email }
            storedEmail={ user.email }
            storedComment={ user.comment }
          />))}
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
