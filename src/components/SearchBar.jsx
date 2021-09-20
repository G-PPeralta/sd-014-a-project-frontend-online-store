import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <form>
        <label htmlFor="searchText">
          <input
            type="text"
            data-testid="query-input"
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
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default SearchBar;
