import React from 'react';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';
import CartButton from './CartButton';
import { getProductsFromCategoryAndQuery, getProductById } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
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

  handleRatingStorage = () => {
    const { email, rating, comment, ratingsArray } = this.state;
    const storageElement = (
      `   <div>
        <h2>${email}</h2>
        <br />
        <span>${rating}</span>
        <br />
        <span>${comment}</span>
      </div>
      <br />`
    );
    const newRatingsArray = [...ratingsArray, storageElement];
    this.setState({
      ratingsArray: newRatingsArray,
    });
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
    const { product, email, rating, comment } = this.state;
    const { title, price, thumbnail, itemDescription } = product;
    return (
      <div>
        <CartButton />
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        {itemDescription ? <p>{itemDescription}</p> : null }
        <AddCartButton product={ product } dataTestId="product-detail-add-to-cart" />

        <form>
          <label htmlFor="email">
            E-mail
            <input
              name="email"
              type="text"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label>
            nota
            <input />
          </label>
          <label htmlFor="comment">
            comentario
            <input
              name="comment"
              type="text"
              value={ comment }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
          </label>
          <button
            onClick={ this.handleRatingStorage }
          >
            avaliar

          </button>
        </form>
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
