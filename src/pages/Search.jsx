import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import InputGen from '../components/InputGen';
import CategoriesItem from '../components/CategoriesItem';
import ProductCard from '../components/ProductCard';

import '../styles/search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      categories: [],
      products: [],
      checkedCat: '$CATEGORY_ID',
      wasSearch: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.categoriesChange = this.categoriesChange.bind(this);
    this.productsResult = this.productsResult.bind(this);
    this.getCategoriesOptions = this.getCategoriesOptions.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { searchText, checkedCat } = this.state;
    this.getProductsFromCategoryAndQuery(checkedCat, searchText);
  }

  async getCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  async getProductsFromCategoryAndQuery(checkedCat, searchText) {
    const products = await getProductsFromCategoryAndQuery(checkedCat, searchText);
    this.setState({ products: products.results, wasSearch: true });
  }

  getCategoriesOptions() {
    const { categories, checkedCat } = this.state;

    return (
      categories.map((cat) => (<CategoriesItem
        key={ cat.id }
        cat={ cat }
        checked={ checkedCat }
        onChange={ this.categoriesChange }
      />))
    );
  }

  categoriesChange({ target: { checked, id } }) {
    if (checked) {
      this.setState({ checkedCat: id });
    }
    if (!checked) {
      this.setState({ checkedCat: '$CATEGORY_ID' });
    }
    const { searchText, checkedCat } = this.state;
    this.getProductsFromCategoryAndQuery(checkedCat, searchText);
  }

  productsResult() {
    const { products } = this.state;
    if (products === []) {
      return (<h1>Nenhum produto encontrado</h1>);
    }
    return (
      products.map((product) => <ProductCard key={ product.id } product={ product } />)
    );
  }

  render() {
    const { searchText, wasSearch } = this.state;
    return (
      <section className="d-flex">
        <aside className="category align-items-start flex-column">
          {this.getCategoriesOptions()}
        </aside>
        <div className="container">
          <div className="d-flex justify-content-between">
            <InputGen
              config={ ['text', 'searchText', 'query-input', searchText, false,
                this.handleChange, '', 'search-bar flex-grow-1', 'Faça sua pesquisa'] }
            />
            <button
              type="button"
              onClick={ this.handleClick }
              data-testid="query-button"
            >
              Pesquisar
            </button>
            <Link data-testid="shopping-cart-button" to="/shopping-cart">
              Carrinho
            </Link>
          </div>
          <div className="itemList">
            {wasSearch ? this.productsResult()
              : (
                <h1 data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </h1>
              )}
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
