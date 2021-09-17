import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <input type="text" name="searchTextHome" id="searchTextHome"/>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>

    )
  }
}
