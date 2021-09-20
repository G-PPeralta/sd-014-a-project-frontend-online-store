import React from 'react';
import { getCategories } from '../services/api';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.pegarCategorias();
  }

  pegarCategorias = async () => {
    const categories = await getCategories();
    this.setState({ categories, isLoading: false });
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <div>
        { categories.map((cat) => (
          <p key={ cat.id } data-testid="category">{cat.name}</p>
        ))}
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {isLoading ? null : this.renderCategories()}
      </div>
    );
  }
}

export default Search;
