import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { fetchSearchProduct, handleChange, inputSearch } = this.props;
    return (
      <div className="App" data-testid="home-initial-message">
        <label htmlFor="inputFilter">
          {' '}
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="inputFilter"
            name="inputSearch"
            value={ inputSearch }
            data-testid="query-input"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ fetchSearchProduct }
        >
          Search
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  fetchSearchProduct: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

export default SearchInput;
