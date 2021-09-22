import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChangeQuantity extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { signal, testId, handleClick } = this.props;

    return (
      <div>
        <button
          data-testid={ testId }
          value={ signal }
          onClick={ handleClick }
          type="button"
        >
          {signal}
        </button>
      </div>
    );
  }
}

ChangeQuantity.propTypes = {
  signal: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ChangeQuantity;
