import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, handleChange, handleClick } = this.props;
    return (
      <label htmlFor="searchText">
        <input
          type="text"
          data-testid="query-input"
          value={ searchText }
          name="searchText"
          onChange={ handleChange }
        />

        <button
          type="submit"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </label>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default SearchBar;
