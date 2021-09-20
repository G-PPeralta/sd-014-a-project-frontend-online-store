import React from 'react';
import BtnCart from '../components/BtnCart';
import { getCategories } from '../services/api';
import ListCategory from '../components/ListCategory';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
      // produtos: [],
    };
    this.getCategoryAPI = this.getCategoryAPI.bind(this);
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

  render() {
    const { categorias } = this.state;
    return (
      <main>
        <input type="text" placeholder="Digite um produto" />
        <BtnCart />
        <ul>
          { categorias.map((each) => <ListCategory key={ each.id } category={ each } />) }
        </ul>
      </main>
    );
  }
}

export default Home;
