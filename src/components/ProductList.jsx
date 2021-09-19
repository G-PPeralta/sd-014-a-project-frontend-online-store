import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from './CartButton';
import Cart from '../pages/Cart';

const numberFormat = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      resultQuery: [],
      searchText: '',
      categoriaDeProduto: '',
      categories: [],
      xablau: [],
    };

    this.callGetCategories = this.callGetCategories.bind(this);
    this.callApi = this.callApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.callGetCategories();
    this.handleCategory();
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  async handleCategory(event) {
    if (event) {
      await this.setState({ categoriaDeProduto: event.target.value });
    }

    await this.callApi();
  }

  handleClick(event) {
    event.preventDefault();
    const { xablau } = this.state;
    xablau.push({
      prodId: event.target.className,
      name: event.target.name,
      prodPrice: event.target.value,
    });
    this.setState({
      xablau,
    });
    console.log(xablau);
  }

  async callApi() {
    const { searchText, categoriaDeProduto } = this.state;
    try {
      const results = await getProductsFromCategoryAndQuery(
        categoriaDeProduto, searchText,
      );
      if (results) {
        this.setState({ resultQuery: results.results });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async callGetCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories,
      resultQuery, searchText, categoriaDeProduto, xablau } = this.state;
    const apiProps = {
      searchText,
      categoriaDeProduto,
    };
    return (
      <div className="main-cols">
        <div className="display-flex">
          <div className="search-bar">
            <label htmlFor="searchText">
              <input
                type="text"
                name="searchText"
                id="searchText"
                data-testid="query-input"
                onChange={ this.handleChange }
                className="search-text"
              />
            </label>
            <button
              data-testid="query-button"
              type="submit"
              onClick={ this.callApi }
              className="search-button"
            >
              Pesquisar Produtos
            </button>
            <CartButton className="cartIcon" />
          </div>
        </div>
        <div className="display-flex">
          <nav className="side-nav-categories">
            {categories.map((category) => (
              <div className="category-div" key={ category.id }>
                <input
                  data-test-id={ category.name }
                  value={ category.id }
                  type="radio"
                  name="categoriaDeProduto"
                  onChange={ this.handleCategory }
                />
                <span className="radio-sp" data-testid="category">{ category.name }</span>
              </div>
            ))}
          </nav>
          <section className="product-list">
            {resultQuery.map((result) => (
              <div
                className="category-div"
                key={ result.id }
                data-testid="product"
              >
                <Link
                  data-testid="product-detail-link"
                  to={ {
                    pathname: `/productDetails/${result.id}`,
                    apiProps,
                  } }
                >
                  <section className="product-card">
                    <p
                      className="pc-title"
                      data-testid="shopping-cart-product-name"
                    >
                      { result.title }
                    </p>
                    <img
                      className="pc-img"
                      src={ result.thumbnail }
                      alt={ result.title }
                    />
                    <p className="pc-price">{ numberFormat(result.price) }</p>
                    <p className="pc-id">{ result.id }</p>
                  </section>
                </Link>
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  name={ result.title }
                  value={ result.price }
                  className={ result.id }
                  onClick={ this.handleClick }
                >
                  +
                </button>
              </div>
            ))}
          </section>
          <div>
            <Cart cartList={ xablau } />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
