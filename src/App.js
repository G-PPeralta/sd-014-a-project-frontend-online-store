import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { getCategories } from './services/api';
import Home from './pages/home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const results = await getCategories();
    this.setState = {
      results,
    };
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <Home data-testid="home-initial-message" />
        <header className="App-header">

          <span>{ results }</span>
        </header>
      </div>
    );
  }
}

export default App;
