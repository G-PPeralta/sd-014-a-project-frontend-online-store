import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Comments from '../components/Comments';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ShoppingCart from '../services/image/ShoppingCart.svg';

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
    const findProduct = arrayProducts.find((product) => product.id === idProduct);
    if (findProduct === undefined) return <h3>Produto indisponível...</h3>;

    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ ShoppingCart } alt="shopping cart" />
        </Link>
        <div>
          <p data-testid="product-detail-name">{findProduct.title}</p>
          <img src={ findProduct.thumbnail } alt="foto-produto" width="250px" />
          <p>
            PREÇO: R$
            {findProduct.price}
          </p>
        </div>
        <button
          type="button"
          onClick={ () => {
            const localStorageValue = JSON.parse(localStorage.getItem('carrinho'));
            const saveLocal = [...localStorageValue, findProduct];
            localStorage.setItem('carrinho', JSON.stringify(saveLocal));
          } }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho!
        </button>

      <section>
        <div>
          <p data-testid="product-detail-name">{testando.title}</p>
        </div>

        <div>
          <Comments />
        </div>
      </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
