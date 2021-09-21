import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class details extends React.Component {
  constructor() {
    super();
    const { match: { params: { id } } } = this.props;
    this.state = {
      title: '',
      thumbnail: '',
      price: 0,
      id,
    };
  }

  componentDidMount() {
    this.handleAPI();
  }

  handleAPI = async () => {
    const { id } = this.state;
    const detail = await getProductsFromCategoryAndQuery(id, '');
    this.setState({
      title: detail.title,
      thumbnail: detail.thumbnail,
      price: detail.price,
      availableQuantity: detail.available_quantity,
      condition: detail.condition,
    });
  }

  render() {
    const { title, thumbnail, price, availableQuantity, condition } = this.state;
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
          <h4>
            Especificações:
          </h4>
          <span>
            { `Quantidade disponível: ${availableQuantity}` }
          </span>
          <span>
            { `Condição do produto: ${condition}` }
          </span>
        </div>
      </div>
    );
  }
}

details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default details;
