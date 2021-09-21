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
    const { handleCategoryChange, value } = this.props;
    return (
      <aside>
        <h2>Categorias:</h2>
        <div>
          {categories.map(({ id, name }) => (
            <label key={ id } data-testid="category" htmlFor={ id }>
              <input
                type="radio"
                name="category"
                id={ id }
                // Carla ajudou muito aqui! 🙌
                checked={ id === value }
                value={ id }
                onChange={ handleCategoryChange }
              />
              {name}
            </label>
          ))}
        </div>
      </aside>
    );
  }
}

Categories.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Categories;
