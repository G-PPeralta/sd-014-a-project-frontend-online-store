import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Form from '../components/Form';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      price: 0,
      // attributes: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleAPI();
  }

  // https://api.mercadolibre.com/items/MLB1721632892

  handleAPI = async () => {
    this.setState({ isLoading: true });
    const { match: { params: { id } } } = this.props;
    const endPoint = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const details = await endPoint.json();
    console.log(details);
    this.setState({
      title: details.title,
      thumbnail: details.thumbnail,
      price: details.price,
      // attributes: details.attributes,
      availableQuantity: details.available_quantity,
      soldQuantity: details.sold_quantity,
      condition: details.condition,
      isLoading: false });
  }

  render() {
    const { title,
      thumbnail,
      price,
      availableQuantity,
      soldQuantity,
      condition, isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div>
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
