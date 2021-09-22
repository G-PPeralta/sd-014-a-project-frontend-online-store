import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      props: { dtId, type, idName, text, value, onChange },
    } = this;
    return (
      <label htmlFor={ idName }>
        {text}
        <input
          data-testid={ dtId }
          id={ idName }
          type={ type }
          name={ idName }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dtId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
