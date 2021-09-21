import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesData: [],
    };
  }

  componentDidMount() {
    this.getCategoriesCall();
  }

  getCategoriesCall = async () => {
    const categories = await getCategories();
    this.setState({ categoriesData: categories });
  }

  handleChange = async ({ target: { value } }) => {
    const { props: { getCategoryId, fetchSearchProduct } } = this;
    await getCategoryId(value);
    await fetchSearchProduct();
  }

  render() {
    const { categoriesData } = this.state;
    return (
      <ul>
        {categoriesData.map(({ id, name }) => (
          <li key={ id }>
            <label data-testid="category" htmlFor={ id }>
              <input
                type="radio"
                id={ id }
                value={ id }
                onChange={ this.handleChange }
                name="category"
              />
              { name }
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

CategoriesMenu.propTypes = {
  getCategoryId: PropTypes.func.isRequired,
  fetchSearchProduct: PropTypes.func.isRequired,
};

export default CategoriesMenu;
