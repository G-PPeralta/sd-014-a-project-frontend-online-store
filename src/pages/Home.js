import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductsList from './ProductsList';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      searchInput: '',
      productList: [],
    };
  }
  handleSearch = ({ target }) => {
    this.setState({ searchInput: target.value });
  }

  getProductList = async () => {
    const {searchInput, selectedCategory} = this.state;
    const product = await getProductsFromCategoryAndQuery(selectedCategory, searchInput);
    const results = product.results
    this.setState({
      productList: results
    })
  }
  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    const categories = await getCategories();
    this.setState({ categoryList: categories });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <div>
        <header>
        <div className="search-icon">
          <ion-icon name="search" />
        </div>
        <input
          type="text"
          onChange={ this.handleSearch }
          value={ searchInput }
        />
        <Link to="/shopping-cart">
          <div className="cart-icon">
            <ion-icon name="cart-outline" data-testid="shopping-cart-button" />
          </div>
        </Link>

      </header>
        <CategoryList
          categoryList={ categoryList }
        />
        <ProductsList />
      </div>
    );
  }
}
