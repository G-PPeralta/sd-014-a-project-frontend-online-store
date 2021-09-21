import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onChange, onClick } = this.props;
    return (
      <form id="SearchBar">
        <label htmlFor="searchText">
          <input
            type="text"
            data-testid="query-input"
            name="searchText"
            onChange={ onChange }
          />

          <button
            type="submit"
            data-testid="query-button"
            onClick={ onClick }
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
