import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchField extends Component {
  render() {
    const { searchTerm, category, handleChange } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.fetchProducts(category) }
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
      </div>
    );
  }
}

SearchField.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchField;
