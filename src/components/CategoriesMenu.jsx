import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class CategoriesMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesData: [],
      searchCategory: '',
    };
  }

  componentDidMount() {
    this.getCategoriesCall();
  }

  getCategoriesCall = async () => {
    const categories = await getCategories();
    this.setState({ categoriesData: categories });
  }

  handleChange = async (event) => {
    const searchResult = await getProductsFromCategoryAndQuery(event.target.value, 'carro');
    this.setState({ searchCategory: searchResult.results });
  }

  render() {
    const { categoriesData } = this.state;

    return (
      <div>
        <form>
          {categoriesData.map(({ id, name }) => (
            <label data-testid="category" htmlFor={ id } key={ id }>
              <input type="radio" id={ id } value={ id } onChange={ this.handleChange } name="category" />
              { name }
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default CategoriesMenu;
