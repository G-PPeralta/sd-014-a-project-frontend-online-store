import React from 'react';
import CategoriesList from '../Components/CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <header data-testid="home-initial-message">
        <CategoriesList />
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </header>
    );
  }
}

export default Home;
