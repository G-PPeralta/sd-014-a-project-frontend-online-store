import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    // Essa propriedade da classe impede o setState de atualizar o estado
    // do componente quando ele já foi desmontado (o que gera um warning)
    // Inspiração: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    this.componentMounted = true;
    this.fetchCategories();
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }

  fetchCategories() {
    getCategories()
      .then((json) => {
        if (this.componentMounted) {
          this.setState({ categories: json });
        }
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <h2>Categorias:</h2>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id } data-testid="category">{name}</li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Categories;
