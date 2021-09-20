import React, { Component } from 'react';
import Category from '../components/Category';

class Home extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Category />
      </div>
    );
  }
}

export default Home;
