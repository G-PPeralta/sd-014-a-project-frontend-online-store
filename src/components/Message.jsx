import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {
  render() {
    const { message, dataTestId, className } = this.props;
    return (
      <span data-testid={ dataTestId } className={ className }>
        {message}
      </span>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default Message;
