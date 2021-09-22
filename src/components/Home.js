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
  }

  clickCategories({ target: { id } }) {
    this.setState({
      category: id,
    });
    this.getListFromAPI();
  }

  render() {
    const { input, lista, listCategories, carShop } = this.state;
    return (
      <div data-testid="home-initial-message">
        <ToShoppingCart carShop={ carShop } />
        Digite algum termo de pesquisa ou escolha uma categoria.
        <SearchComponent
          value={ input }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        <div className="d-flex">
          <Categories
            listCategories={ listCategories }
            clickCategories={ this.clickCategories }
          />

          <ProductList
            lista={ lista }
            carShop={ this.carShop }
          />

        </div>
      </div>
    );
  }
}

export default Home;
