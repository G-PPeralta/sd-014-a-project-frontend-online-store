import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchComponent extends Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div>
        <input
          value={ value }
          onChange={ onChange }
          name="input"
          className=""
          placeholder="Pesquise seu produto"
          data-testid="query-input"
        />
        <button
          type="button"
          className="btn btn-dark"
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
  value: PropTypes.string.isRequired,
};
