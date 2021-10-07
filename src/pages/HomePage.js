import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCategories from '../components/ListCategories';
import ShowProducts from '../components/ShowProducts';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { getNumberOfProductsInCart } from '../services/AddToCart';
import '../App.css';
import '../styles/home.css';
import TotalyProductHome from '../components/TotalyProductHome';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
      products: [],
      itemsInCart: 0,
    };
  }

  componentDidMount() {
    this.updateItemsIncart();
  }

  updateItemsIncart =() => {
    const items = getNumberOfProductsInCart();
    this.setState({
      itemsInCart: items,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = async ({ target: { value } }) => {
    const { queryInput } = this.state;
    const getAPI = await getProductsFromCategoryAndQuery(value, queryInput);
    const { results } = getAPI;
    this.setState({
      products: results,
    });
  }

  render() {
    const { itemsInCart } = this.state;
    const { products } = this.state;
    return (
      <div className="search-container">

        <ListCategories handleClick={ this.handleClick } />
        <p data-testid="home-initial-message" className="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <input
          data-testid="query-input"
          name="queryInput"
          onChange={ this.handleChange }
          type="text"
          className="search-input"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
          value=""
        >
          Procurar
        </button>
        { products.length > 0 ? <ShowProducts products={ products } />
          : <p>Nenhum Produto Encontrado</p> }
        <Link
          to="/card"
          className="btn btn-primary"
          data-testid="shopping-cart-button"
        >
          <img
            className="btn-primary"
            alt="shopping-cart"
            src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
          />
          <TotalyProductHome itemsInCart={ itemsInCart } />
        </Link>
      </div>

    );
  }
}
