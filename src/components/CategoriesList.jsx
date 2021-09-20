import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      sortedProducts: [],
    };
  }

  componentDidMount() {
    this.arrayCategories();
  }

  arrayCategories = async () => {
    const productByCategory = await getCategories();
    this.setState({ sortedProducts: productByCategory });
  }

  render() {
    const { sortedProducts } = this.state;
    return (
      <div>
        <ul>
          { sortedProducts.map((category) => (
            <li
              data-testid="category"
              key={ category.id }
            >
              { category.name }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
