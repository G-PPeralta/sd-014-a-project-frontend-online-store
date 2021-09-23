/* eslint-disable react/prop-types */
import React from 'react';

class CreateComments extends React.Component {
  render() {
    const { email, starsChecked, text } = this.props;
    return (
      <div>
        <h4>{email}</h4>
        { starsChecked }
        <p>{text}</p>
      </div>
    );
  }
}

export default CreateComments;
