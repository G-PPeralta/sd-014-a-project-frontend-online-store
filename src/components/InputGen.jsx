import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGen extends Component {
  render() {
    const { config } = this.props;
    const [type, name, dataTestId, value, checked, onChange, labelText,
      className, placeholder] = config;

    if (checked === false) {
      return (
        <label
          htmlFor={ dataTestId }
          className={ className }
          data-testid={ `${dataTestId}-label` }
        >
          <span>{ labelText }</span>
          <input
            type={ type }
            name={ name }
            data-testid={ dataTestId }
            value={ value }
            placeholder={ placeholder }
            onChange={ onChange }
            className={ className }
          />
        </label>
      );
    }
    return (
      <label htmlFor={ dataTestId } data-testid={ `${dataTestId}-label` }>
        <span>{ labelText }</span>
        <input
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputGen.propTypes = {
  config: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
};

export default InputGen;
