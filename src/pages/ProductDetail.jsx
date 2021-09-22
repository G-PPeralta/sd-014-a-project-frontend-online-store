import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductItemFromML } from '../services/api';

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      product: { attributes: [] },
    };

    this.getProductItemFromML = this.getProductItemFromML.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // console.log(typeof (id));
    this.getProductItemFromML(id).then((response) => {
      this.setState({
        product: response,
      });
    });
  }

  async getProductItemFromML(id) {
    const responseRaw = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return responseRaw.json();
  }

  render() {
    const { product } = this.state;
    const { attributes } = product;

    return (
      <section data-testid="product-detail-name">
        <h1>{ `${product.title}` }</h1>
        <div>
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <div>
          <h2>
            {' '}
            { `R$ ${product.price}` }
          </h2>
        </div>
        <div>
          <h2>Especificações Técnicas</h2>
          <ul>
            { attributes.map(({ name, value_name: valueName }, index) => (
              <li key={ `attribute${index}` }>
                { `${name}: ${valueName}` }
              </li>
            )) }
          </ul>
        </div>
      </section>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
