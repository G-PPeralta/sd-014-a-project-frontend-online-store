import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      searchInput: '',
      productList: [],
      selectedCategory: '',
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  handleSearch = ({ target }) => {
    this.setState({ searchInput: target.value });
  }

  getProductList = async () => {
    const { searchInput, selectedCategory } = this.state;
    const list = await getProductsFromCategoryAndQuery(selectedCategory, searchInput);
    const { results } = list;
    this.setState({
      productList: results,
    });
  }

  handleCategory = async ({ target }) => {
    const { searchInput } = this.state;
    const { id } = target;
    const list = await getProductsFromCategoryAndQuery(id, searchInput);
    const { results } = await list;
    this.setState({ productList: results });
  }

  getCategories = async () => {
    const categories = await getCategories();
    this.setState({ categoryList: categories });
  }

  renderProductList = () => {
    const { productList } = this.state;
    return (
      <div>
        {productList.map((item) => (
          <ProductCard key={ item.id } product={ item } />
        ))}
      </div>
    );
  }

  render() {
    const { categoryList, searchInput, productList } = this.state;
    const initialMessage = (
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );
    return (
      <div>
        <header>
          <div className="search-icon">
            <ion-icon name="search" />
          </div>
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.handleSearch }
            value={ searchInput }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.getProductList }
          >
            Pesquisar
          </button>
          <Link to="/shopping-cart">
            <div className="cart-icon">
              <ion-icon name="cart-outline" data-testid="shopping-cart-button" />
            </div>
          </Link>
        </header>
        <CategoryList
          categoryList={ categoryList }
          handleCategory={ this.handleCategory }
        />
        {productList.length !== 0
          ? this.renderProductList()
          : initialMessage}

      </div>
    );
  }
}
