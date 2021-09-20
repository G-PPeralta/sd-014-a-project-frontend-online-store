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
      selectedId: "",
      // products: [],
    };
    this.getCategoryAPI = this.getCategoryAPI.bind(this);
    this.changeSelectedId = this.changeSelectedId.bind(this);
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

  // getProductsFromCategoryAndQuery = async (category, query) => {
  //   const products = await getProductsFromCategoryAndQuery(category, query);
  //   this.setState({
  //     products,
  //   });
  // }

  render() {
    const { categorias } = this.state;
    return (
      <main>
        <div className="input">
          <input type="text" placeholder="Digite um produto" />
          <BtnCart />
        </div>
        <div className="main-conteiner">
          {/* Esquerda com Categorias */}
          <fieldset className="conteiner-left">
            <ul>
              { categorias.map((e) => (
                <ListCategory
                  key={ e.id }
                  category={ e }
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
