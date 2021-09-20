import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {
  render() {
    const { message, dataTestId } = this.props;
    return (
      <p data-testid={ dataTestId }>
        {message}
      </p>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default Message;
