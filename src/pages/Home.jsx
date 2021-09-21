import React from 'react';
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
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  getProductsFromCategoryAndQuery = async (category, query) => {
    const productList = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: productList,
    }, () => {
      const { products } = this.state;
      console.log(products);
    });
  }

  render() {
    const { categorias, query, selectedId, products } = this.state;
    return (
      <main>
        <div className="input">
          <input
            type="text"
            placeholder="Digite um produto"
            value={ query }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          <BtnCart
            query={ query }
            handleSubmit={ this.getProductsFromCategoryAndQuery }
            selectedId={ selectedId }
            data-testid="query-button"
          />
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
              data-testid="product"
            />)) : <p>Nenhum produto foi encontrado</p> }
          </fieldset>
        </div>
      </main>
    );
  }
}

export default Home;
