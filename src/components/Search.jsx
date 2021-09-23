import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="searchProduct">
          <input
            onChange={this.handleChange}
            value={query}
            data-testid="query-input"
            type="text"
            id="searchProduct"
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={this.handleClick}
        >
          pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
