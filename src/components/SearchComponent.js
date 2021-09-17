import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchComponent extends Component {
  render() {
    const { input, onChange, onClick } = this.props;
    return (
      <div>
        <input
          value={ input }
          onChange={ onChange }
          name="input"
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
