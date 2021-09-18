import React from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';
import Loading from './Loading';

export default class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesAPI();
  }

  getCategoriesAPI = async () => {
    const categories = await getCategories();

    this.setState({ isLoading: false, categories });
  }

  showCategories = () => {
    const { categories } = this.state;
    const { category, onChange } = this.props;
    return (
      categories.map(({ name, id }) => (
        <div data-testid="category" key={ id }>
          <input
            type="radio"
            name="category"
            id={ id }
            value={ name }
            checked={ category === name }
            onChange={ onChange }
          />
          <label htmlFor={ id }>{ name }</label>
        </div>
      ))
    );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <aside>
        { isLoading ? <Loading /> : this.showCategories() }
      </aside>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  category: null,
};
