import React from 'react';
import ShoppingCartLink from '../components/ShoppingCartLink';
import { getCategories } from '../services/api';
import Categories from '../components/Categories';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    })
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ShoppingCartLink />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <hr/>
        <div>
          { categories.map((categorie) => <Categories key={ categorie.id } catName={ categorie.name } />)}
        </div>
      </div>
    );
  }
}

export default Main;
