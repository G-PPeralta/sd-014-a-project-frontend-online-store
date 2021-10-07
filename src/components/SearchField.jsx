import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchField extends Component {
  render() {
    const { searchTerm, category, handleChange, fetchProducts } = this.props;
    return (
      <form className="search-form">
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => fetchProducts(category) }
        >
          Buscar
        </button>
        <input
          data-testid="query-input"
          type="text"
          name="searchTerm"
          value={ searchTerm }
          onChange={ handleChange }
          placeholder="Exemplo: produto 'xxx'"
        />
      </form>
    );
  }
}

SearchField.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default SearchField;
