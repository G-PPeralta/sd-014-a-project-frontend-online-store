import React, { Component } from 'react';
import { getCategories } from '../services/api';
import ListCategory from './ListCategory';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      retornoCategory: [],
    };
  }

  componentDidMount() {
    getCategories().then((result) => this.setState({ retornoCategory: result }));
  }

  render() {
    const { retornoCategory } = this.state;
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <ListCategory categoryList={ retornoCategory } />
      </div>
    );
  }
}

export default Home;
