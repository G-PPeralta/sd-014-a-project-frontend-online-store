import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ProductList from './ProductList';
import SearchComponent from './SearchComponent';
import Categories from './Categories';
import '../css/home.css';
import ToShoppingCart from './ToShoppingCart';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      input: '',
      lista: [],
      listCategories: [],
      carShop: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickCategories = this.clickCategories.bind(this);
  }

  componentDidMount() {
    this.listCategories();
    this.getListFromAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.getListFromAPI();
  }

  getListFromAPI= async () => {
    try {
      const { input, category } = this.state;
      const listaProdutos = await getProductsFromCategoryAndQuery(category, input);
      this.setState({
        lista: listaProdutos.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  carShop = () => {
    this.setState({
      carShop: true,
    });
  }

  listCategories() {
    this.setState(async () => {
      const categories = await getCategories();
      this.setState({
        listCategories: categories,
      });
    });
    this.handleClick();
  }

  async clickCategories({ target: { id } }) {
    await this.setState({
      category: id,
    });
    this.getListFromAPI();
  }

  render() {
    const { input, lista, listCategories, carShop } = this.state;
    return (
      <div data-testid="home-initial-message">
        <div className="d-flex justify-content-between navbar py-0">
          <div />
          <div className="text-center my-3">
            <p className="d-none">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <SearchComponent
              value={ input }
              onChange={ this.handleChange }
              onClick={ this.handleClick }
            />
          </div>
          <ToShoppingCart carShop={ carShop } />
        </div>
        <div className="d-flex home-container mt-4">
          <div className="overflow-auto category mx-2">
            <Categories
              listCategories={ listCategories }
              clickCategories={ this.clickCategories }
            />
          </div>
          <div className="product-list">
            <ProductList
              lista={ lista }
              carShop={ this.carShop }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
