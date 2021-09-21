import React from 'react';
import BtnCart from '../components/BtnCart';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListCategory from '../components/ListCategory';
// import ProductsCard from '../components/ProductsCard';
import '../temp.css';

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

  handleSubmit = () => {

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
    const { categorias, query, selectedId } = this.state;
    return (
      <main>
        <div className="input">
          <input
            type="text"
            placeholder="Digite um produto"
            value={ query }
            onChange={ this.handleChange }
          />
          <BtnCart
            query={ query }
            handleSubmit={ this.getProductsFromCategoryAndQuery }
            category={ selectedId }
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
            <h1>DIREITA</h1>
          </fieldset>
        </div>
      </main>
    );
  }
}

export default Home;
