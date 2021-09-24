import React from 'react';
import PropTypes from 'prop-types';
import '../SearchInput.css';

class SearchInput extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <div>
        <input
          onChange={ handleChange }
          id="input"
          type="text"
          data-testid="query-input"
          className="inputText"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchInput;
