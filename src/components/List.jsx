import React from 'react';
import { Link } from 'react-router-dom';
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
          .map(({ name, id }) => (
            <Link to={ `/category/${id}` } key={ id } data-testid="category">
              <li>{name}</li>
            </Link>
          ))}
      </div>
    );
  }
}

export default List;
