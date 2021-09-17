import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        <h3> Digite algum termo de pesquisa ou escolha uma categoria. </h3>
      </div>
    );
  }
}
