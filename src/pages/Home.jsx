import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h3 data-testid='home-initial-message'>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default Home;
