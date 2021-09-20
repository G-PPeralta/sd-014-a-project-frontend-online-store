import React from 'react';
import CartButton from './CartButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      isLoading: true,
      isLoadingProducts: false,
      inputSearch: '',
    };
  }

  componentDidMount() {
    this.pegarCategorias();
  }

  pegarCategorias = async () => {
    const categories = await getCategories();
    this.setState({ categories, isLoading: false });
  }

  getProduct = async () => {
    await this.setState({ isLoadingProducts: true });
    const { inputSearch } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputSearch);
    await this.setState({ products: products.results, isLoadingProducts: false });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ inputSearch: event.target.value });
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((cat) => (
          <p key={ cat.id } data-testid="category">{ cat.name }</p>
        ))}
      </div>
    );
  }

  renderProducts = () => {
    const { products } = this.state;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <Link to="/product" params={ { id } } key={ id } data-testid="product-detail-link">
            <div data-testid="product">
              <img src={ thumbnail } alt="imagem do produto" />
              <p>{ title }</p>
              <p>{`R$:${price}`}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    const { isLoading, inputSearch, isLoadingProducts } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <input
            type="text"
            placeholder="Pesquisa Aqui"
            name="barraDePesquisa"
            value={ inputSearch }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.getProduct }
          >
            Pesquisar
          </button>
        </form>
        <CartButton />
        {isLoading ? null : this.renderCategories()}
        {isLoadingProducts ? null : this.renderProducts()}
      </div>
    );
  }
}

export default Search;
