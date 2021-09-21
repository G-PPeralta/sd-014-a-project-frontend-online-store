import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Search from './Search';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      product: '',
      productList: [],
      requisition: false,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ product: value });
  }

  handleClick = async () => {
    const { product } = this.state;
    const productList = await getProductsFromCategoryAndQuery(null, product);
    this.setState({ productList: productList.results,
      requisition: true });
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
          <button type="button">Adicionar icone do carrinho aqui</button>
        </Link>
        <CategoriesList />
        <Search productList={ productList } requisition={ requisition } />
      </div>
    );
  }
}

export default Home;
