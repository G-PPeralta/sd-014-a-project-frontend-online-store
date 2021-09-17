import React from 'react';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Categories />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default Home;
