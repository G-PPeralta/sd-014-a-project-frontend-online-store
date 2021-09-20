import React, { Component } from 'react';
import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <section className="search-section">
        <input id="search-input" name="search-input" type="text" />
        <p className="home-initial-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}
