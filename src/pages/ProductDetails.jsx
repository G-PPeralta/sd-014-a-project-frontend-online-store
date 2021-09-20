import React from 'react';
import PropTypes from 'prop-types';
import 'react-rater/lib/react-rater.css';

import GoToHomeButton from '../components/GoToHomeButton';
import GoToCartButton from '../components/GoToCartButton';
import Header from '../components/Header';
import ProductDetailCard from '../components/ProductDetailCard';
import ReviewForm from '../components/ReviewForm';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = this.props;
    document.title = product.title;

    this.state = {
      homeIs: false,
    };
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title } = product;
    const { homeIs } = this.state;
    return (
      <div
        style={ { backgroundColor: '#f9f9f9' } }
        className="d-flex flex-column w-100"
      >
        <Header>
          <div>
            <h5 className="text-white">{title}</h5>
          </div>
          <div className="d-flex">
            <GoToHomeButton />
            <GoToCartButton />
          </div>
        </Header>
        <ProductDetailCard product={ product } homeIs={ homeIs } />
        <ReviewForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductDetails;
