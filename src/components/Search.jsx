import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import FreeShipping from './FreeShipping';
import '../style/search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: '',
      products: [],
      isLoading: true,
      isLoadingProducts: false,
      inputSearch: '',
    };
  }

  componentDidMount() {
    this.pegarCategorias();
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  pegarCategorias = async () => {
    const categories = await getCategories();
    this.setState({ categories, isLoading: false });
  }

  getProduct = async () => {
    this.setState({ isLoadingProducts: true });
    const { inputSearch, category } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, inputSearch);
    this.setState({ products: products.results, isLoadingProducts: false });
  }

  handleClick = async (event) => {
    this.setState({ [event.target.name]: event.target.id });
    await event.preventDefault();
    this.getProduct();
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <div className="btn-group dropdown-button">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categoria
        </button>
        <ul className="dropdown-menu category-dropdown">
          {categories.map((cat) => (
            <li key={ cat.id }>
              <input
                id={ cat.id }
                className="dropdown-item"
                data-testid="category"
                name="category"
                onClick={ this.handleClick }
                value={ cat.name }
                type="button"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderProducts = () => {
    const { products } = this.state;
    return (
      <div className="row">
        {products.map((product) => {
          const {
            id,
            title: name,
            thumbnail,
            price,
            category_id: cat,
            shipping: { free_shipping: freeShipping },
          } = product;
          return (
            <div
              key={ id }
              className="border border-secondary rounded col-xs-12 col-lg-4"
            >
              <Link
                to={ `/product/${cat}/${name.replace('%', '').replace('/', '')}/${id}` }
                data-testid="product-detail-link"
              >
                <div data-testid="product">
                  <img src={ thumbnail } alt="imagem do produto" />
                  <p>{name}</p>
                  <p>{`R$:${price}`}</p>
                  { freeShipping ? <FreeShipping /> : null}
                </div>
              </Link>
              <AddCartButton product={ product } dataTestId="product-add-to-cart" />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { isLoading, inputSearch, isLoadingProducts } = this.state;
    return (
      <div className="container my-4">
        <div className="row mb-3">
          <p className="col-xs-12 col-lg-6 m-0 my-1" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div className="col-xs-12 col-lg-6" role="form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Buscar produtos"
                name="inputSearch"
                value={ inputSearch }
                onChange={ this.handleChange }
                data-testid="query-input"
                className="form-control"
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.getProduct }
                className="btn btn-primary btn-outline-secondary text-dark"
              >
                Pesquisar
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-2 category-container">
            {isLoading ? null : this.renderCategories()}
            <h6 className="pt-3">Outros filtros</h6>
            <p>(not working)</p>
            <label htmlFor="free-shipping" className="pt-1">
              Frete gratis
              <input type="checkbox" id="free-shipping" className="ms-1" />
            </label>
            <h1 className="text-center pe-3">.</h1>
            <h1 className="text-center pe-3">.</h1>
            <h1 className="text-center pe-3">.</h1>
          </div>
          <div className="col-xs-12 col-lg-10">
            {isLoadingProducts ? null : this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
