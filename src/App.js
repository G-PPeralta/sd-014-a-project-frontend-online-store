import React from 'react';
import './App.css';
import { getCategories } from './services/api';

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
        <header className="App-header">

          <span>{ results }</span>
        </header>
      </div>
    );
  }
}

export default App;
