import React from 'react';
import PropTypes from 'prop-types';
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
    const { handleCategoryChange } = this.props;
    return (
      <aside>
        <h2>Categorias:</h2>
        <div>
          {categories.map(({ id, name }) => (
            // Pessini FTW! Muito obrigado! 🚀
            <button
              key={ id }
              type="button"
              data-testid="category"
              onClick={ () => handleCategoryChange(id) }
            >
              {name}
            </button>
          ))}
        </div>
      </aside>
    );
  }
}

Categories.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Categories;
