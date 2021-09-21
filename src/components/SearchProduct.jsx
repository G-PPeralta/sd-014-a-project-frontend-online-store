import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class SearchProduct extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: '',
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

  searchProduct = (arrayProduct) => {
    if (arrayProduct.length !== 0) {
      return (
        <div>
          {arrayProduct.map((products) => (
            <CardProduct
              key={ products.id }
              title={ products.title }
              image={ products.thumbnail }
              price={ products.price }
              getItem={ this.getItem }
            />))}
        </div>
      );
    }
  }

  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        {this.searchProduct(arrayProduct)}
      </div>
    );
  }
}

SearchProduct.propTypes = {
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchProduct;
