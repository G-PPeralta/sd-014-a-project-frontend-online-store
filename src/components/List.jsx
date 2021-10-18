import React from 'react';
import { getCategories } from '../services/api';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestCategoriesApi();
  }

  requestCategoriesApi = async () => {
    const request = await getCategories();
    this.setState({
      categories: request,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories
          .map(({ name, id }) => <li data-testid="category" key={ id }>{name}</li>)}
      </div>
    );
  }
}

export default List;
