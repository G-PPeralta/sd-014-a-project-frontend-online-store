import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoriesList from './CategoriesList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Search from './Search';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      category: null,
      product: '',
      productList: [],
      requisition: false,
      cartProducts: [],
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ product: value });
  }

  addtocart = (product) => {
    this.setState((previousState) => ({
      cartProducts: [...previousState.cartProducts, product],
    }));
    this.exportCart(product);
  }

  fetchGetProducts = async () => {
    const { product, category } = this.state;
    const productList = await getProductsFromCategoryAndQuery(category, product);
    this.setState({ productList: productList.results,
      requisition: true });
  }

  handleClick = () => {
    this.fetchGetProducts();
  }

  getCategory = (category) => {
    this.setState({ category });
    this.fetchGetProducts();
  }

  exportCart = (product) => {
    const { takeCartProduct } = this.props;
    takeCartProduct(product);
  }

  render() {
    const { product, productList, requisition } = this.state;
    return (
      <div data-testid="home-initial-message">
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
        <label htmlFor="product">
          <input
            type="text"
            id="product"
            value={ product }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Buscar

        </button>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
        <CategoriesList category={ this.getCategory } />
        <Search
          productList={ productList }
          requisition={ requisition }
          addtocart={ this.addtocart }
        />
      </div>
    );
  }
}

Home.propTypes = {
  takeCartProduct: PropTypes.func.isRequired,
};

export default Home;
