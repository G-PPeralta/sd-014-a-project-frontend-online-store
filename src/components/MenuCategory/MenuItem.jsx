import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
  render() {
    const { categoria, identifier, handleRadio, selected } = this.props;
    return (
      <label data-testid="category" htmlFor={ identifier }>
        <input
          type="radio"
          name="category"
          id={ identifier }
          value={ categoria }
          checked={ selected === identifier }
          onChange={ () => handleRadio(identifier) }
        />
        { categoria }
      </label>
    );
  }
}

MenuItem.propTypes = {
  categoria: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  handleRadio: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
