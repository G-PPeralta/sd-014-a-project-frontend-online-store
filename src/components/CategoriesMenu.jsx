import React from 'react';
import { getCategories } from '../services/api';

class CategoriesMenu extends React.Component {
  constructor() {
    super();
    this.state = { categoriesData: [] };
  }

  componentDidMount() {
    this.getCategoriesCall();
  }

  getCategoriesCall = async () => {
    const categories = await getCategories();
    this.setState({ categoriesData: categories });
  }

  render() {
    const { categoriesData } = this.state;

    return (
      <div>
        <form>
          {categoriesData.map(({ id, name }) => (
            <label data-testid="category" htmlFor={ id } key={ id }>
              <input type="radio" id={ id } value={ id } name="category" />
              { name }
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default CategoriesMenu;
