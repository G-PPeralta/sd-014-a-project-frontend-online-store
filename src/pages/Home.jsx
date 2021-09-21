import React from 'react';
import BtnQuery from '../components/BtnQuery';
import BtnCart from '../components/BtnCart';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListCategory from '../components/ListCategory';
import '../temp.css';
import ProductsCard from '../components/ProductsCard';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
      query: '',
      selectedId: '',
      products: [],
    };
    this.getCategoryAPI = this.getCategoryAPI.bind(this);
    this.changeSelectedId = this.changeSelectedId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getCategoryAPI();
  }

  getCategoryAPI = async () => {
    const categorias = await getCategories();
    this.setState({
      categorias,
    });
  };

  changeSelectedId = (id) => {
    this.setState({
      selectedId: id,
    }, () => {
      const { query, selectedId } = this.state;
      this.handleSearch(selectedId, query);
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  handleSearch = async (category, query) => {
    const productsJson = await getProductsFromCategoryAndQuery(category, query);
    const productList = await productsJson.results;
    this.setState({
      products: productList,
    });
  }

  render() {
    const { categorias, query, selectedId, products } = this.state;
    return (
      <main>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <div className="input">
          <input
            type="text"
            placeholder="Digite um produto"
            value={ query }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          <BtnQuery
            query={ query }
            handleSubmit={ this.handleSearch }
            selectedId={ selectedId }
          />
          <BtnCart />
        </div>
        <div className="main-conteiner">
          {/* Esquerda com Categorias */}
          <fieldset className="conteiner-left">
            <ul>
              { categorias.map((category) => (
                <ListCategory
                  key={ category.id }
                  category={ category }
                  onClick={ this.changeSelectedId }
                />)) }
            </ul>
          </fieldset>
          {/* Direita com Produtos */}
          <fieldset className="conteiner-right">
            {(products.length !== 0) ? products.map((product) => (<ProductsCard
              key={ product.id }
              product={ product }
            />)) : <p>Nenhum produto foi encontrado</p> }
          </fieldset>
        </div>
      </main>
    );
  }
}

export default Home;
