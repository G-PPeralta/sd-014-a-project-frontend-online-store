import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import AddCartButton from './AddCartButton';

/* Pra formaatar o preço do produto, segui os passos de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat */

const formatPrice = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      productsList: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.onClick = this.onClick.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  onClick(event) {
    this.fetchAPI(event.target.value);
  }

  fetchAPI(category) {
    getProductsFromCategoryAndQuery(category, '').then((query) => {
      this.setState({ productsList: query.results });
    });
  }

  fetchCategories() {
    getCategories().then((categories) => {
      this.setState({
        categoriesList: categories,
      });
    });
  }

  render() {
    const { categoriesList, productsList } = this.state;
    const sizeTitle = 30;
    return (
      <section className="categories">
        <aside className="categoriesList">
          {categoriesList.map((categorie) => (
            <div className="categorie" key={ categorie.id }>
              <label htmlFor={ categorie.id }>
                <input
                  data-testid="category"
                  type="radio"
                  id={ categorie.id }
                  onClick={ this.onClick }
                  name="categorie"
                  value={ categorie.id }
                />
                {categorie.name}
              </label>
            </div>
          ))}
        </aside>
        <div className="products">
          {productsList.map((product) => (
            <div className="product" key={ product.id }>
              <div className="card-product">
                <Link
                  data-testid="product-detail-link"
                  to={ { pathname: `/product/${product.id}`, state: { product } } }
                  key={ product.id }
                >
                  <div
                    data-testid="product"
                    key={ product.id }
                  >
                    <h3 className="title-product">
                      {`${product.title.slice(0, sizeTitle)} ...`}
                    </h3>
                    <img
                      className="img-products"
                      src={ product.thumbnail }
                      alt={ product.title }
                    />
                  </div>
                </Link>
                <div>
                  <p className="price-product">{formatPrice(product.price)}</p>
                  <AddCartButton testeid="product-add-to-cart" product={ product } />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
export default Categories;
