import React, { Component } from 'react';
import MarketButton from './MarketButton';

class Home extends Component {
  render() {
    return (
      <section>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        <MarketButton />
      </section>
    );
  }
}

export default Home;
