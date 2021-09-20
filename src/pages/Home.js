import React from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductsList from './ProductsList';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    const categories = await getCategories();
    this.setState({ categoryList: categories });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <div>
        <CategoryList
          categoryList={ categoryList }
        />
        <ProductsList />
      </div>
    );
  }
}
