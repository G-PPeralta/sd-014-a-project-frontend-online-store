import React from 'react';
import PropTypes from 'prop-types';

import HomeButton from '../components/HomeButton';
import CartButton from '../components/CartButton';
import Header from '../components/Header';
import CardProductDetail from '../components/CardProductDetail';

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
      <div>
        <Header>
          <div>
            <h5 className="text-white">{title}</h5>
          </div>
          <div>
            <HomeButton />
            <CartButton />
          </div>
        </Header>
        <CardProductDetail product={ product } homeIs={ homeIs } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductDetails;
