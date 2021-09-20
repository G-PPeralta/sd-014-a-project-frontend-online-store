import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categorys: [],
      fetched: false,
    };
  }

  componentDidMount() {
    this.handleApiGetCategorys();
  }

  handleApiGetCategorys = async () => {
    const categories = await getCategories();
    this.setState({
      categorys: [...categories],
      fetched: true,
    });
  };

  handleElements(arrObj) {
    return (
      <div>
        {arrObj.map((category) => (
          <div key={ category.id } data-testid="category">
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { fetched, categorys } = this.state;
    return <div>{fetched && this.handleElements(categorys)}</div>;
  }
}

export default Category;
