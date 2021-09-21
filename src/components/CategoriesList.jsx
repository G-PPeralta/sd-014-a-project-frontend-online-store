/* eslint-disable react/prop-types */
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

  handleclick = ({ target }) => {
    const { name } = target;
    const { category } = this.props;
    category(name);
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
              <button
                type="button"
                name={ category.id }
                onClick={ this.handleclick }
              >
                { category.name }

              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
