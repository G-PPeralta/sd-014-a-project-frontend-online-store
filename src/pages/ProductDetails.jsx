import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingIcon from '../components/ShoppingIcon';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  handleClick = () => {
    const { product } = this.props;
    addProduct(product);
  }

  render() {
    const { title, thumbnail, price } = this.state;
    console.log(this.state);
    return (
      <div>
        <ShoppingIcon />
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h3>
          { `R$${price}`}
        </h3>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
