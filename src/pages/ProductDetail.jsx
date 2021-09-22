import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';
import CartButton from '../components/CartButton';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('setCart'))) {
      localStorage.setItem('setCart', JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    const { cartItems } = this.state;
    localStorage.setItem('setCart', JSON.stringify(cartItems));
  }

  getItem = (item) => {
    const { cartItems } = this.state;
    const cart = cartItems;
    this.setState({ cartItems: ([...cart, item]) });
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { title, price } = params;

    return (
      <div>
        <CartButton />
        <div data-testid="product">
          <h2 data-testid="product-detail-name">{ title }</h2>
          <p>{ price }</p>
          <AddToCart
            testId="product-detail-add-to-cart"
            itemTitle={ title }
            itemPrice={ price }
            getItem={ this.getItem }
          />
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductDetail;
