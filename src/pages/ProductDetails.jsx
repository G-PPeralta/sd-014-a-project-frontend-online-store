import React from 'react';
import PropTypes from 'prop-types';
import Comments from '../components/Comments';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      idProduct: '',
      arrayProducts: [],
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match } = this.props;
    const { id } = match.params;
    const idsSplit = id.split('+');
    const response = await getProductsFromCategoryAndQuery(idsSplit[1], null);
    this.setState({
      idProduct: idsSplit[0],
      arrayProducts: response.results,
    });
  }

  render() {
    const { idProduct, arrayProducts } = this.state;
    if (arrayProducts.length === 0) return <span>Carregando...</span>;
    const testando = arrayProducts.find((product) => product.id === idProduct);
    if (testando === undefined) return <h3>Produto indisponível...</h3>;
    return (
      <section>
        <div>
          <p data-testid="product-detail-name">{testando.title}</p>
        </div>

        <div>
          <Comments />
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
