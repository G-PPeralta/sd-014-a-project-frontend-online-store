import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { onChange } = this.props;
    return (
      <div className="d-flex flex-column">
        {arrObj.map(({ name, id }) => (
          <label htmlFor={ id } key={ id }>
            <input
              type="radio"
              id={ id }
              name="category"
              value={ id }
              onChange={ onChange }
              data-testid="category"
            />
            {name}
          </label>
        ))}
      </div>
    );
  }

  render() {
    const { fetched, categorys } = this.state;
    return <div>{fetched && this.handleElements(categorys)}</div>;
  }
}
Category.propTypes = { onChange: PropTypes.func.isRequired };
export default Category;
