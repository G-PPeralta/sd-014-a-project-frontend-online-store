import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddItemToCart from '../components/AddItemToCart';
import Loading from '../components/Loading';
import Form from '../components/Form';
import ShoppingCartButton from '../components/ShoppingCartButton';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      details: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleAPI();
  }

  handleAPI = async () => {
    this.setState({ isLoading: true });
    const { match: { params: { id } } } = this.props;
    const endPoint = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const details = await endPoint.json();
    this.setState({
      details,
      isLoading: false });
  }

  render() {
    const { details, isLoading } = this.state;
    const { title,
      thumbnail,
      price,
      availableQuantity,
      soldQuantity,
      condition } = details;

    if (isLoading) return <Loading />;

    return (
      <div>
        <ShoppingCartButton />
        <h2 data-testid="product-detail-name">
          { title }
        </h2>
        <img src={ thumbnail } alt="Product Thumbnail" />
        <span>
          {`R$ ${price}`}
        </span>
        <div>
          <h4> Detalhes: </h4>
          <span>
            { `Quantidade disponível: ${availableQuantity}` }
          </span>
          <span>
            { `Quantidade vendida: ${soldQuantity}` }
          </span>
          <span>
            { `Condição do produto: ${condition}` }
          </span>
        </div>
        <AddItemToCart dataTestId="product-detail-add-to-cart" product={ details } />
        <Form />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
