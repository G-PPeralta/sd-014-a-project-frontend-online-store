import React, { Component } from 'react';
import * as api from '../services/api';
import ProductList from '../components/ProductList';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      searchTextHome: '',
      categoriaDeProduto: '',
    };
    this.callGetCategories = this.callGetCategories.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.callGetCategories();
  }

  // handleChange = ({ target }) => this.setState({
  //   [target.name]: target.value,
  // });

  async callGetCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    return (
      <>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList />
      </>
    );
  }
}
