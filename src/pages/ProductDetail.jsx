import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';
import CartButton from '../components/CartButton';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      nameItem: [],
      priceItem: [],
    };
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('nameItems'))) {
      localStorage.setItem('nameItems', JSON.stringify([]));
    }
    if (!JSON.parse(localStorage.getItem('priceItems'))) {
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
