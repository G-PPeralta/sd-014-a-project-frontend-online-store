import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class SearchProduct extends Component {
  constructor() {
    super();
    this.state = {
      nameItem: [],
      priceItem: [],

    };
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('setCart'))) {
      localStorage.setItem('nameItems', JSON.stringify([]));
      localStorage.setItem('priceItems', JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    const { nameItem, priceItem } = this.state;
    localStorage.setItem('nameItems', JSON.stringify(nameItem));
    localStorage.setItem('priceItems', JSON.stringify(priceItem));
  }

  getItem = (name, price) => {
    const { nameItem, priceItem } = this.state;
    this.setState({
      nameItem: ([...nameItem, name]),
      priceItem: ([...priceItem, price]),
    });
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
              id={ products.id }
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
