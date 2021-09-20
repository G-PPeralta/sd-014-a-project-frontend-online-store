import React from 'react';
import CategoriesList from './CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
        <CategoriesList />
      </div>
    );
  }
}
export default Home;
